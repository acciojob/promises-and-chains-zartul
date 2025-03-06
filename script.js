//your JS code here. If required.
document.getElementById("voteForm").addEventListener("submit", function(event) {
            event.preventDefault();
            
            let userName = document.getElementById("name").value.trim();
            let userAge = document.getElementById("age").value.trim();
            
            if (userName === "" || userAge === "") {
                alert("Please enter valid details.");
                return;
            }
            
            userAge = Number(userAge);
            
            let checkVotingEligibility = new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (userAge > 18) {
                        resolve(`Welcome, ${userName}. You can vote.`);
                    } else {
                        reject(`Oh sorry ${userName}. You aren't old enough.`);
                    }
                }, 4000);
            });
            
            checkVotingEligibility
                .then(message => alert(message))
                .catch(error => alert(error));
        });