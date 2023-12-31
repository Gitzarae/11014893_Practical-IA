

# Electronic Medical Record System API

## Endpoints:

1. *Register Patient*
   - Endpoint: /registerPatient
   - Method: POST
   - Request Body:
     json
     {
       "patientId": "123",
       "surname": "",
       "othernames": "",
       "gender": "",
       "phoneNumber": "",
       "residentialAddress": "",
       "emergency": {
         "name": "",
         "contact": "",
         "relationship": ""
       }
     }
     
   - Response: "Patient registered successfully"

2. *Start Encounter*
   - Endpoint: /startEncounter
   - Method: POST
   - Request Body:
     json
     {
       "patientId": "",
       "dateTime": "",
       "type": ""
     }
     
   - Response: ""

3. *Submit Vitals*
   - Endpoint: /submitVitals
   - Method: POST
   - Request Body:
     json
     {
       "patientId": "",
       "bloodPressure": "",
       "temperature": "",
       "pulse": "",
       "spO2": ""
     }
     
   - Response: ""

4. *List Patients*
   - Endpoint: /listPatients
   - Method: GET
   - Response: Array of patient objects

5. *Patient Details*
   - Endpoint: /patientDetails/:patientId
   - Method: GET
   - Response: Patient details for the specified patientId
