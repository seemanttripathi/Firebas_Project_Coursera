// JavaScript file for the web page "World Peace Issue Tracker"
// Created by Harrison Kong
// Copyright (C) Coursera 2020

// Your web app's Firebase configuration
// REPLACE THIS WITH YOUR CONFIG

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Paste the web app's configuration above this line
// Our code starts below

const rootRef = firebase.database().ref('issues/');

// Task 4 ------------------------------------------

rootRef.on("value",

  (snapshot) => {
    const listTableBody = document.getElementById("list-table-body");

    // clear all the table rows first
    listTableBody.textContent = "";

    snapshot.forEach((child) => {
      issue = child.val();
      console.log(issue);
      // var row = document.createElement("tr");
      // row.innerHTML = "<td>" + issue.severity + "</td><td>" + encodeHtml("[REPLACE THIS]") + "</td><td>" + "[REPLACE THIS]" + "</td>";
      // listTableBody.append(row);
    });

  },

  (error) => {
    console.log("Error: " + error.code);
  }

);

// Task 5 ------------------------------------------

function addNewIssue() {
  const severity = document.getElementById("severity-dropdown").value;
  const description = document.getElementById("description-textfield").value;
  const resolved = document.getElementById("resolved-dropdown").value;

  if (description.length == 0) {
    alert("Description cannot be blank!");
    return;
  }

  // Add code to insert into firebase here

  document.getElementById("description-textfield").value="";
}

// Task 6 ------------------------------------------

function updateIssue(issueKey, newResolvedValue) {
  alert("update function for issue key: " + issueKey + "newResolveValue: " + newResolvedValue);
}

// Task 7 ------------------------------------------

function deleteIssue(issueKey) {
  if (confirm("Are you sure?")) {
    alert("delete function for issue key: " + issueKey);
  }
}

// Utility function to encode special HTML characters so that the
// web browser does not treat them as HTML tags
// but as literal characters

function encodeHtml(str) {
  str = str.replace(/&/g, '&amp;');
  str = str.replace(/</g, '&lt;');
  str = str.replace(/>/g, '&gt;');
  str = str.replace(/ /g, '&nbsp;');
  return str;
}
