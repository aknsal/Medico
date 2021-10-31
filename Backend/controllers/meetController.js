const newMeet = async (req,res) => {
    try {
        const newMeetObj = {
            "title": "Example Daily Meeting",
    "agenda": "Example Agenda",
    "start": "2021-10-31 12:30:00",
    "end": "2021-10-31 13:00:00",
    "recurrence": "FREQ=DAILY;INTERVAL=1;COUNT=7",
    "timezone": "Asia/Kolkata",
    "enabledAutoRecordMeeting": false,
    "allowAnyUserToBeCoHost": false,
    "enabledJoinBeforeHost": false,
    "enableConnectAudioBeforeHost": false,
    "joinBeforeHostMinutes": 0,
    "excludePassword": false,
    "publicMeeting": false,
    "reminderTime": 10,
    "enableAutomaticLock": false,
    "automaticLockMinutes": 0,
    "allowFirstUserToBeCoHost": false,
    "allowAuthenticatedDevices": false,
    "invitees": [
        {
            "email": req.body.patientEmail,
            "displayName": "John Andersen",
            "coHost": false
        },
    ],
    "sendEmail": true,
    "hostEmail": req.body.doctorEmail,
    "siteUrl": "oursite.url",

        }
    } catch (error) {
        
    }
}