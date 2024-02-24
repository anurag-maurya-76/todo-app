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
  getDay(index) {
    if (index === 0) {
      return "M";
    } else if (index === 1) {
      return "T";
    } else if (index === 2) {
      return "W";
    } else if (index === 3) {
      return "T";
    } else if (index === 4) {
      return "F";
    } else if (index === 5) {
      return "S";
    } else if (index === 6) {
      return "S";
    } else {
      return "";
    }
  }
}

const formatter = new Formatter();
export default formatter;
