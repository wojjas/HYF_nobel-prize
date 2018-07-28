class Server {
    static asyncRequest(apiUrl, cb) {
        fetch(apiUrl)

            .then(function (response) {
                return response.json()
                    .then(function (data) {
                        if (!data.error) {
                            console.log("Success!", data);
                            cb(data);
                        }
                    })

                    .catch(function (error) {
                        console.error("Failure!", error);

                    })
            })
    }
}

export default Server;