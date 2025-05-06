function age() {
    var d1 = document.getElementById('date').value;
    var m1 = document.getElementById('month').value;
    var y1 = document.getElementById('year').value;

    var today = new Date();
    var d2 = today.getDate();
    var m2 = 1 + today.getMonth();
    var y2 = today.getFullYear();

    var d, m, y;
    var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (d1 > d2) {
        d2 += monthDays[m2 - 2];
        m2--;
    }
    if (m1 > m2) {
        m2 += 12;
        y2--;
    }

    d = d2 - d1;
    m = m2 - m1;
    y = y2 - y1;

    document.getElementById('age').innerHTML = `Your age is <strong> ${y} Years, ${m} Months, ${d} Days </strong>`;
}