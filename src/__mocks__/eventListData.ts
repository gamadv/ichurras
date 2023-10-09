import { TEventCard } from "@/app/agenda/EventCard";

export const mockEventData: TEventCard[] = [
    {
        id: "1",
        date: new Date().toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit'
        }),
        peopleCount: 10,
        title: "Event 1",
        peopleList: [
            { id: 1, havePaid: true, name: "Alice", amount: 50 },
            { id: 2, havePaid: false, name: "Bob", amount: 100 },
            { id: 3, havePaid: false, name: "Bob", amount: 300 },
            { id: 4, havePaid: false, name: "Bob", amount: 500 },
            { id: 5, havePaid: false, name: "Bob", amount: 10 },
            { id: 6, havePaid: false, name: "Bob", amount: 10 },
        ],
    },
    {
        id: "2",
        date: new Date().toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit'
        }),
        peopleCount: 8,
        title: "Event 2",
        peopleList: [
            { id: 1, havePaid: false, name: "Charlie", amount: 40 },
            { id: 2, havePaid: true, name: "David", amount: 30 },
        ],
    },
    {
        id: "3",
        date: new Date().toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit'
        }),
        peopleCount: 12,
        title: "Event 11",
        peopleList: [
            { id: 1, havePaid: true, name: "Eva", amount: 70 },
            { id: 2, havePaid: true, name: "Frank", amount: 90 },
        ],
    },
    {
        id: "4",
        date: new Date().toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit'
        }),
        peopleCount: 15,
        title: "Event 12",
        peopleList: [
            { id: 1, havePaid: false, name: "Grace", amount: 0 },
            { id: 2, havePaid: true, name: "Harry", amount: 45 },
        ],
    },
    {
        id: "5",
        date: new Date().toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit'
        }),
        peopleCount: 20,
        title: "Event 13",
        peopleList: [
            { id: 1, havePaid: true, name: "Ivy", amount: 60 },
            { id: 2, havePaid: false, name: "Jack", amount: 0 },
        ],
    },
    {
        id: "6",
        date: new Date().toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit'
        }),
        peopleCount: 18,
        title: "Event 14",
        peopleList: [
            { id: 1, havePaid: true, name: "Kate", amount: 75 },
            { id: 2, havePaid: true, name: "Liam", amount: 80 },
        ],
    },
    {
        id: "7",
        date: new Date().toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit'
        }),
        peopleCount: 25,
        title: "Event 15",
        peopleList: [
            { id: 1, havePaid: false, name: "Mia", amount: 55 },
            { id: 2, havePaid: false, name: "Noah", amount: 65 },
        ],
    },
];
