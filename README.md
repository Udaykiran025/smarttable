## Application Details
|               |
| ------------- |
|**Generation Date and Time**<br>Sun Jul 07 2024 06:04:05 GMT+0000 (Coordinated Universal Time)|
|**App Generator**<br>@sap/generator-fiori-freestyle|
|**App Generator Version**<br>1.14.1|
|**Generation Platform**<br>SAP Business Application Studio|
|**Template Used**<br>simple|
|**Service Type**<br>OData Url|
|**Service URL**<br>https://services.odata.org/V2/Northwind/Northwind.svc/
|**Module Name**<br>smarttable|
|**Application Title**<br>Smart Table|
|**Namespace**<br>com.mit.smarttable|
|**UI5 Theme**<br>sap_horizon|
|**UI5 Version**<br>1.125.1|
|**Enable Code Assist Libraries**<br>False|
|**Enable TypeScript**<br>False|
|**Add Eslint configuration**<br>False|

## smarttable

An SAP Fiori application.

### Starting the generated app

-   This app has been generated using the SAP Fiori tools - App Generator, as part of the SAP Fiori tools suite.  In order to launch the generated app, simply run the following from the generated app root folder:

```
    npm start
```

- It is also possible to run the application using mock data that reflects the OData Service URL supplied during application generation.  In order to run the application with Mock Data, run the following from the generated app root folder:

```
    npm run start-mock
```

#### Pre-requisites:

1. Active NodeJS LTS (Long Term Support) version and associated supported NPM version.  (See https://nodejs.org)


## Description 

# SmartTable with SmartFilter Bar

## Overview

The **SmartTable** project is a web-based application that allows users to view and interact with data from the **Northwind OData services**. This project leverages a **SmartFilter Bar** to filter the data based on various criteria and displays the filtered data in a tabular format. Additionally, users can click on a single record in the table to navigate to a details page that shows more in-depth information about the selected record.

This project is a great example of utilizing modern web technologies to work with OData services and to provide a user-friendly interface for filtering, viewing, and interacting with data.

## Features

- **SmartFilter Bar**: A dynamic and interactive filter bar that allows users to filter the displayed data based on multiple filter criteria.
- **Data Table (SmartTable)**: A responsive table that displays the filtered data in a structured format.
- **Record Navigation**: Clicking on any row in the SmartTable will take the user to a separate page where they can view the complete details of the selected record.
- **Northwind OData Service**: The data is fetched from the publicly available Northwind OData services, which provides sample business data related to orders, customers, products, and more.



