import pandas as pd
import numpy as np
import nltk
import string
import nltk
import string

from nltk.corpus import stopwords
from nltk.stem import PorterStemmer
from sklearn.feature_extraction.text import TfidfVectorizer
# Download required resources (first time only)
nltk.download("punkt")
nltk.download("punkt_tab")
nltk.download("stopwords")

# Stemmer
ps = PorterStemmer()

# Load stopwords only once (FAST)
stop_words = set(stopwords.words("english"))

# ============================
# PREPROCESSING FUNCTION
# ============================

def transform_text(text):

    # Convert to lowercase
    text = text.lower()

    # Tokenize
    words = nltk.word_tokenize(text)

    filtered_words = []

    # Remove punctuation & special characters
    for word in words:
        if word.isalnum():
            filtered_words.append(word)

    processed_words = []

    # Remove stopwords
    for word in filtered_words:
        if word not in stop_words:
            processed_words.append(ps.stem(word))

    return " ".join(processed_words)

