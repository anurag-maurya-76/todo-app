class Formatter {
  date(date) {
    let month = {
      1: "Jan",
      2: "Feb",
      3: "Mar",
      4: "Apr",
      5: "May",
      6: "Jun",
      7: "Jul",
      8: "Aug",
      9: "Sep",
      10: "Oct",
      11: "Nov",
      12: "Dec",
    };
    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();

    if (dd < 10) dd = "0" + dd;
    const formattedDate = dd + ", " + month[mm] + " " + yyyy;
    return { formattedDate };
  }
}

const formatter = new Formatter();
export default formatter;
