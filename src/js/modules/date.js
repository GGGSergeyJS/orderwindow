const storage = () => {
    let period = new Date();

    if (localStorage.getItem(1) == null) {
        period.setDate(period.getDate() + 5);
        localStorage.setItem(1, period);
        return period;
    } else {
        period = localStorage.getItem(1);
        return period;
    }
};

export default storage;
