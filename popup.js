document.getElementById("showHistory").addEventListener("click", function () {
    chrome.history.search({ text: '', maxResults: 10 }, function (data) {
        let historyHTML = "<table><tr><th>Tiêu đề</th><th>URL</th><th>Thời gian</th></tr>";
        data.forEach((item) => {
            const visitTime = new Date(item.lastVisitTime).toLocaleString();
            historyHTML += `<tr><td>${item.title}</td><td><a href="${item.url}" target="_blank">${item.url}</a></td><td>${visitTime}</td></tr>`;
        });
        historyHTML += "</table>";
        document.getElementById("historyInfo").innerHTML = historyHTML;
    });
});
