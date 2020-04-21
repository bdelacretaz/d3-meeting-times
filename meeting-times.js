var START_TIME = new Date('2020-05-20T00:00:00+00:00');
var ONE_HOUR_MSEC = 3600 * 1000;
var DURATION_MSEC = 24 * ONE_HOUR_MSEC;
var WIDTH_PIXELS = 2000;

var possibleMeetingTimes = {
    meetingName: "Some Test Meeting",
    startTime: new Date(START_TIME),
    endTime: new Date(START_TIME.getTime() + DURATION_MSEC),
    widthPixels: WIDTH_PIXELS,
    timePaddingHours: 12,
    people: [
        {
            name: "UTC Ref",
            offset: 0,
            times: [
                { color: "yellow", label: "-5", start: -5, end: -4 },
                { color: "cyan", label: "-4", start: -4, end: -3 },
                { color: "yellow", label: "-3", start: -3, end: -2 },
                { color: "cyan", label: "-2", start: -2, end: -1 },
                { color: "yellow", label: "-1", start: -1, end: 0 },
                { color: "cyan", label: "00", start: 0, end: 1 },
                { color: "yellow", label: "1am", start: 1, end: 2 },
                { color: "cyan", label: "2am", start: 2, end: 3 },
                { color: "yellow", label: "3am", start: 3, end: 4 },
                { color: "cyan", label: "4am", start: 4, end: 5 },
                { color: "yellow", label: "5am", start: 5, end: 6 },
                { color: "cyan", label: "6am", start: 6, end: 7 },
                { color: "yellow", label: "7am", start: 7, end: 8 },
                { color: "cyan", label: "8am", start: 8, end: 9 },
                { color: "yellow", label: "9am", start: 9, end: 10 },
                { color: "cyan", label: "10am", start: 10, end: 11 },
                { color: "yellow", label: "11am", start: 11, end: 12 },
                { color: "cyan", label: "NOON", start: 12, end: 13 },
                { color: "yellow", label: "1pm", start: 13, end: 14 },
                { color: "cyan", label: "2pm", start: 14, end: 15 },
                { color: "yellow", label: "3pm", start: 15, end: 16 },
                { color: "cyan", label: "4pm", start: 16, end: 17 },
                { color: "yellow", label: "5pm", start: 17, end: 18 },
                { color: "cyan", label: "6pm", start: 18, end: 19 },
                { color: "yellow", label: "7pm", start: 19, end: 20 },
                { color: "cyan", label: "8pm", start: 20, end: 21 },
                { color: "yellow", label: "9pm", start: 21, end: 22 },
                { color: "cyan", label: "10pm", start: 22, end: 23 },
                { color: "yellow", label: "11pm", start: 23, end: 24 },
            ]
        },
        {
            name: "Test +2",
            offset: 2,
            times: [
                { 
                    color: "#ccc",
                    label: "midnight",
                    start: 0,
                    end: 0.5
                },
                { 
                    color: "#ccc",
                    label: "2am",
                    start: 2,
                    end: 3
                },
                { 
                    color: "#ccc",
                    label: "4-6am",
                    start: 4,
                    end: 6
                },
            ]
        },
        {
            name: "Test +5",
            offset: 5,
            times: [
                { 
                    color: "yellow",
                    label: "midnight",
                    start: 0,
                    end: 0.5
                },
                { 
                    color: "yellow",
                    label: "Noon",
                    start: 12,
                    end: 13
                },
                { 
                    color: "yellow",
                    label: "5am",
                    start: 5,
                    end: 6
                },
            ]
        },
        {
            name: "Test +2.5",
            offset: 2.5,
            times: [
                { 
                    color: "cyan",
                    label: "midnight",
                    start: 0,
                    end: 0.5
                },
                { 
                    color: "cyan",
                    label: "Noon",
                    start: 12,
                    end: 13
                },
                { 
                    color: "cyan",
                    label: "2:30am",
                    start: 2.5,
                    end: 3.5
                },
            ]
        },
        {
            name: "Test -7",
            offset: -7,
            times: [
                { 
                    color: "orange",
                    label: "midnight",
                    start: 0,
                    end: 0.5
                },
                { 
                    color: "orange",
                    label: "Noon",
                    start: 12,
                    end: 13
                },
                { 
                    color: "orange",
                    label: "5pm previous day (midnight UTC)",
                    start: -7,
                    end: -6
                },
            ]
        },
        {
            name: "Bertrand (summer)",
            offset: +2,
            times: [
                { 
                    color: "red",
                    start: 0,
                    end: 6
                },
                { 
                    color: "orange",
                    start: 6,
                    end: 8
                },
                { 
                    color: "orange",
                    start: 23,
                    end: 24
                },
                { 
                    color: "green",
                    start: 8,
                    end: 23
                },
            ]
        },
        {
            name: "Bertrand (winter)",
            offset: +1,
            times: [
                { 
                    color: "red",
                    start: 0,
                    end: 6
                },
                { 
                    color: "orange",
                    start: 6,
                    end: 8
                },
                { 
                    color: "orange",
                    start: 23,
                    end: 24
                },
                { 
                    color: "green",
                    start: 8,
                    end: 23
                },
            ]
        },
    ]
}