# Project 4: Predictive Diagnostic Assistant for Breast Cancer Screening
## Background:
The point of this project is to use the breast cancer data set and create a formula that could potentially help future doctors and to determine whether a tumor is benign or malignant. We are able to do this by processing the data from the Wisconsin breast cancer data set, deducing the important points, and then creating a flask site that would be able to allow users to insert their own data.
## Contributors: 
* Antonette Goroch
* Luis Hernandez
* Pooja Rajesekharan
* Anna Remler
* Daniel Rodriguez
* Grace Yoo
## Introduction:
There are 2 emerging facts about breast cancer: the first is that 1 in 8 women will be diagnosed with breast cancer in the US and 1 in 3 of those will become metastatic (metavivor) and missed cancer diagnoses are leading contributors to patient harm and malpractice risk (pubmed). This is scary given that breast cancer affects about 13% (about 1 in 8) of U.S. women. (American Cancer Society) Keeping this in mind, we were motivated into making an app using the data Wisconsin Breast Cancer dataset.
## Project Overview:
### Who is the target audience? 
The target audience that we had in mind that would benefit in a program like the one we created would be primary care physicians, nurses and physician assistants. These are the people who are trying to figure out how deadly a tumor is. 
### Why is it relevant to them?
Especially primary care doctors, who are not trained in the field of cancer, having a system of hard evidence that would allow them to easily refer their patients to a radiologist would be beneficial.
### About The Dataset
https://www.kaggle.com/datasets/yasserh/breast-cancer-dataset?resource=download
The reason for using this data set is that, by having multiple observations, we can deduce which tumors potentially become malignant. Like axes on a map, having multiple data points  gives us a more precise and could therefore the a good predictive measure for diagnosis.
## Steps:
### Data Pre-Processing
Our dataset was relatively clean & did not require much cleaning or pre-processing beyond importing the CSV via Pandas to conduct further analysis. Daniel converted the initial dataset to an SQL database.
### Exploratory Data Analysis (EDA)
Grace created histograms using Numpy and employed the Random Forest model. Luis did something similar but instead employed the Logistical Regression model.
### Flask & Dashboard Creation
Pooja, Grace & Luis worked on the Flask app and HTML to display the dashboard using Bootstraps. Luis also added a data exploration tool to help orient site users about the source.
## Conclusion:
Looking at the differences, we focused on which criteria was most important in predicting tumor status (number of conceived points, radius, perimeter, area and concavity). Narrowing the data to these points, is that health professionals would have a concrete system to push patients to a radiologist or save them heartache.
## Challenges and Steps:
The main limitation we encountered was in the dataset itself, since it was somewhat limited in both size and scope (limited to one state, Wisconsin). But, hopefully, we will refine the tool with additional/better data (i.e. data from more states, more current data). It would also be nice if we could produce further tools which build on the given outcomes (i.e. 30% chance of malignancy leads to a prompt for follow up with a specialist, or 3% might suggest retesting).

## Sources:
* https://www.kaggle.com/datasets/yasserh/breast-cancer-dataset?resource=download
* https://www.metavivor.org/mbc-prep/metastatic-breast-cancer-statistics/?gclid=Cj0KCQjwyLGjBhDKARIsAFRNgW_r67X5Vl3L6JHrv96VPzyLxCib5UbNFMVNFW6L6nLRRZetAj4p6X0aAoB1EALw_wcB
* https://pubmed.ncbi.nlm.nih.gov/31338938/
