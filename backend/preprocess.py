import nltk

from nltk.corpus import stopwords
from nltk.stem import PorterStemmer

try:
    nltk.data.find("tokenizers/punkt")
except LookupError:
    nltk.download("punkt")

try:
    nltk.data.find("corpora/stopwords")
except LookupError:
    nltk.download("stopwords")

ps = PorterStemmer()
stop_words = set(stopwords.words("english"))

def transform_text(text):
    text = text.lower()
    words = nltk.word_tokenize(text)

    filtered_words = []
    for word in words:
        if word.isalnum():
            filtered_words.append(word)

    processed_words = []
    for word in filtered_words:
        if word not in stop_words:
            processed_words.append(ps.stem(word))

    return " ".join(processed_words)