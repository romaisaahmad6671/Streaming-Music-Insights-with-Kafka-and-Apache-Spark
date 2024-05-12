# Streaming Music Insights with Kafka and Apache Spark

This repository is part of the "Fundamentals of Big Data Analytics (DS2004)" course, designed to analyze and process large-scale music data using Apache Kafka and Apache Spark. The project delivers real-time music recommendations by leveraging big data technologies to handle and analyze streaming data efficiently.

## Project Dependencies

To set up and run this project, ensure the following are installed:

- **Ubuntu**: Necessary for the Linux environment. [Installation guide](https://ubuntu.com/download/desktop)
- **Apache Kafka**: Manages real-time data streams. [Setup documentation](https://kafka.apache.org/documentation/)
- **Apache Spark**: For processing large datasets and implementing machine learning models. [Installation instructions](https://spark.apache.org/downloads.html)
- **Python**: Our main programming language. [Download page](https://www.python.org/downloads/)
- **Jupyter Notebook**: For executing data analysis and model training. [Installation instructions](https://jupyter.org/install)
- **Pandas**: For data manipulation. Install via pip: `pip install pandas`
- **NumPy**: For numerical operations. Install via pip: `pip install numpy`
- **MongoDB**: Database for storing processed data. [Setup guide](https://www.mongodb.com/docs/manual/installation/)
- from sklearn.model_selection import train_test_split
- from sklearn.ensemble import RandomForestClassifier
- from sklearn.metrics import accuracy_score

## Project Overview

This project utilizes Apache Kafka for managing data streams and Apache Spark for data processing and machine learning. This combination allows for efficient handling and analysis of large volumes of music streaming data, facilitating insightful recommendations based on user interactions and preferences.

### Dataset Description

The dataset includes approximately 100 GB of audio files complemented by metadata detailing track IDs, artist names, types, durations, genres, languages, and titles.

### Comprehensive Data Processing and Analysis Workflow

#### Phase 1: Data Extraction and Feature Engineering

- **Audio Feature Extraction**: Techniques such as MFCC, spectral centroid, and zero-crossing rate are applied to extract key auditory features.
- **Metadata Processing**: A secondary dataset containing extensive track information is processed to align with the extracted audio features.

#### Phase 2: Data Integration and Preprocessing

- **Data Merging and Cleaning**: Combines audio features with metadata to form a unified dataset, followed by outlier detection and handling class imbalances.
- **Type Conversions**: Standardizes data formats by converting feature types, particularly MFCC, to float.

#### Phase 3: Utilizing Apache Spark for Data Management and Machine Learning

- **Spark Session Creation**: Initializes a Spark session to facilitate data processing and model training.
- **Data Reading via MongoDB**: Uses Spark to read the integrated data directly from MongoDB, leveraging Spark's ability to handle big data efficiently.
- **DataFrame Storage**: The processed data is stored in Spark DataFrames, which provide a robust structure for data manipulation and analysis.
- **Model Implementation and Tuning**:
  - Implements machine learning models using Spark MLlib.
  - Optimizes model parameters through extensive hyperparameter tuning to improve prediction accuracy.

#### Phase 4: Model Evaluation

- **Performance Metrics**: Evaluates the model using metrics like accuracy, precision, recall, and F1-score to determine its effectiveness in predicting user preferences.

## Usage Instructions

1. Install all required dependencies.
2. Start MongoDB and Kafka services to manage and stream data.
3. Initialize a Spark session and configure it to interact with MongoDB.
4. Execute the Jupyter notebooks to process the data and train the machine learning model:
   ```bash
   jupyter notebook analysis.ipynb
   ```
5. Analyze the model's performance and adjust parameters as needed for optimal results.

## Contributors

- Sharjeel Nadir: [i212699@nu.edu.pk](mailto:i212699@nu.edu.pk)
- Masroor Bin Rehan: [i211707@nu.edu.pk](mailto:i211707@nu.edu.pk)

## Additional Notes

Check compatibility and optimize configurations to suit your specific hardware and software setup. Ensure all scripts and dependencies are updated to their latest versions for best performance.

## References

- [Apache Kafka](https://kafka.apache.org/)
- [Apache Spark](https://spark.apache.org/)
- [Pandas Documentation](https://pandas.pydata.org/pandas-docs/)
