
export const countDays = (startDate, endDate)=>{
    const date = new Date(startDate.getTime());

    const dates = [];

    while(date <= endDate){
        dates.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }

    return dates.length;
}

export const updateDateFormat = (date)=>{
    //DD-MM-YY from -> YYYY-MM-DD to
    let dd = date.substring(0,2);
    let mm = date.substring(3,5);
    let yy = date.substring(6);

    const result = (yy + '-' + mm + '-' + dd);
    console.warn(result);
    return result;
}

export const getMonthName = (month)=>{
    let monthMap = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    return monthMap[parseInt(month)-1];
}