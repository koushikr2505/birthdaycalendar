import DayOfTheWeek from './DayOfTheWeek'
const WeekDays = (props) => {
    let personsData = props.persons;
    const [mon,setMon] = React.useState();
    const [tue,setTue] = React.useState();
    const [wed,setWed] = React.useState();
    const [thu,setThu] = React.useState();
    const [fri,setFri] = React.useState();
    const [sat,setSat] = React.useState();
    const [sun,setSun] = React.useState();
    

    React.useEffect(() => {
        if (personsData) {
            setMon(personsData.filter(person => { return person.dayOfBirth == 1; }));
            setTue(personsData.filter(person => { return person.dayOfBirth == 2; }));
            setWed(personsData.filter(person => { return person.dayOfBirth == 3; }));
            setThu(personsData.filter(person => { return person.dayOfBirth == 4; }));
            setFri(personsData.filter(person => { return person.dayOfBirth == 5; }));
            setSat(personsData.filter(person => { return person.dayOfBirth == 6; }));
            setSun(personsData.filter(person => { return person.dayOfBirth == 0; }));
        }
    }, [personsData])


    return (
        <ul className="calendar clearfix js-calendar">
            <DayOfTheWeek day="mon" personData={mon}></DayOfTheWeek>
            <DayOfTheWeek day="tue" personData={tue}></DayOfTheWeek>
            <DayOfTheWeek day="wed" personData={wed}></DayOfTheWeek>
            <DayOfTheWeek day="thu" personData={thu}></DayOfTheWeek>
            <DayOfTheWeek day="fri" personData={fri}></DayOfTheWeek>
            <DayOfTheWeek day="sat" personData={sat}></DayOfTheWeek>
            <DayOfTheWeek day="sun" personData={sun}></DayOfTheWeek>
        </ul>
    )
}

export default WeekDays;