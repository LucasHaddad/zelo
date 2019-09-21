app.get('/patient', function (req, res) {
    connectToMongo(errorConnectingToDb, successConnectionToDb);
    res.json(Patient.find({}, defaultResponseCallback));
});

app.post('/patient', function (req, res) {
    res.send("Not implemented yet!");

});
  
app.delete('/patient', function (req, res) {
    res.send("Not implemented yet!");

});

app.put('/patient', function (req, res) {
    res.send("Not implemented yet!");

});