[Interactive Rihanna vs. COVID19 Tweet Map](/rih_vs_cov_tweets/index.html)

I compared geotagged tweets containing COVID-19 to Rihanna(trending #1 on twitter 3/27/20). Data was collected in Rstudio through the package "rtweet". After the data was loaded I filtered the results to be only geotagged. Finally, I exported the data to csv and opened it in QGIS. I used the Count Point in Polygon function to get the number of points in each state. Next, I used the field calculator to divide the tweets by the total sum to get the share of tweets. Finally, I subtracted the Rihanna share from the COVID19 share. Positive values(blue) mean that COVID19 had a larger share of tweets and negative values(red) mean the Rihanna had a larger share. The interactive map was made in QGIS through the qgis2web pluggin. Stamen Watercolor was used for the basemap.

Click me
[<img src="images/twitterweb.png?raw=true"/>](rih_vs_cov_tweets/index.html)


I made a heat map of the Rihanna and COVID19 tweets to better visualize where a majority of the tweets originated from. 

[<img src="images/rihannaheat.png?raw=true"/>]


[<img src="images/covidheat.png?raw=true"/>]

