export default class CountryTime {
    value;
    displayElement;
    amPm;

    timeIn12Format(date) {
        this.value = `${(date.getHours() % 12).toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`
        return this;
    }

    element(displayElement) {
        this.displayElement = displayElement
        return this;
    }

    addAmPm() {
        this.amPm = true
        return this;
    }

    amOrPm(date) {
        return date.getHours() - 12 > 0 ? "PM" : "AM"
    }

    realTime() {

        let date;
        if (this.amPm) {
            setInterval(() => {
                date = new Date();
                this.displayElement.innerText = `${this.timeIn12Format(date).value} ${this.amOrPm(date)}`;

            }, 30000)
        } else {

            setInterval(() => {
                date = new Date();
                this.displayElement.innerText = this.timeIn12Format(date).value;
            }, 30000)
        }

    }


}