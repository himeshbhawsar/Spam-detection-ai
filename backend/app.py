from fastapi import FastAPI
from pydantic import BaseModel 
import joblib 
from preprocess import transform_text
from fastapi import HTTPException
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()



model = joblib.load("models/spam_model.pkl")  
vectorizer = joblib.load("models/vectorizer.pkl")  

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.get("/")   
def function():
    return {"Hello": "World with me"}


class PredictionRequest(BaseModel):
      message: str

class PredictionResponse(BaseModel):
    prediction: str
    confidence: float
    
   
@app.post("/predict", response_model=PredictionResponse)

def predict(request: PredictionRequest):
    message = request.message
    if message is None or message.strip() == "":
        raise HTTPException(status_code=400, detail="Message cannot be empty")  

    processed_message = transform_text(message)  
    vector = vectorizer.transform([processed_message])
    prediction = model.predict(vector)
    probability = model.predict_proba(vector)
    
    
    if prediction[0] == 1:
        result  = "Spam"
    else:
        result = "Ham"

    return {
        "prediction": result,
        "confidence": float(probability[0].max())
    }

    

  
    
    