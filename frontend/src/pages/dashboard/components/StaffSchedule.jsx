import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Clock, MapPin } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';
import axios from 'axios';

export default function StaffSchedule() {
    const { user } = useOutletContext();
    const [currentWeekOffset, setCurrentWeekOffset] = useState(0);
    const [scheduleData, setScheduleData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchMySchedules();
    }, []);

    const fetchMySchedules = async () => {
        try {
            const userData = JSON.parse(localStorage.getItem('user'));
            const token = userData?.token || userData?.data?.token;
            const response = await axios.get('http://localhost:5000/api/schedules/my-schedules', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setScheduleData(response.data.data);
        } catch (error) {
            console.error('Error fetching schedules:', error);
        } finally {
            setLoading(false);
        }
    };

    // Get current week dates
    const getWeekDates = (offset = 0) => {
        const today = new Date();
        const currentDay = today.getDay();
        const diff = currentDay === 0 ? -6 : 1 - currentDay; // Adjust to Monday

        const monday = new Date(today);
        monday.setDate(today.getDate() + diff + (offset * 7));

        const weekDates = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date(monday);
            date.setDate(monday.getDate() + i);
            weekDates.push(date);
        }
        return weekDates;
    };

    const weekDates = getWeekDates(currentWeekOffset);
    const today = new Date().toISOString().split('T')[0];

    const formatDate = (date) => {
        return date.toISOString().split('T')[0];
    };

    const getShiftForDate = (date) => {
        const dateStr = formatDate(date);
        return scheduleData.find(s => s.date === dateStr);
    };

    const isToday = (date) => {
        return formatDate(date) === today;
    };

    const getShiftColor = (shiftType) => {
        switch (shiftType) {
            case 'Morning':
                return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'Afternoon':
                return 'bg-orange-100 text-orange-800 border-orange-200';
            case 'Night':
                return 'bg-purple-100 text-purple-800 border-purple-200';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    const getShiftTypeBadge = (type) => {
        if (type === 'overtime') {
            return <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded ml-2">Overtime</span>;
        }
        return null;
    };

    const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">My Schedule</h2>
                <p className="text-gray-600">View your weekly shift schedule</p>
            </div>

            {/* Week Navigation */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                <div className="flex items-center justify-between mb-6">
                    <button
                        onClick={() => setCurrentWeekOffset(currentWeekOffset - 1)}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
                    >
                        <ChevronLeft size={20} />
                        Previous Week
                    </button>

                    <div className="text-center">
                        <h3 className="text-xl font-bold text-gray-800">
                            {weekDates[0].toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} - {weekDates[6].toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </h3>
                        {currentWeekOffset === 0 && <p className="text-sm text-primary font-medium">Current Week</p>}
                    </div>

                    <button
                        onClick={() => setCurrentWeekOffset(currentWeekOffset + 1)}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
                    >
                        Next Week
                        <ChevronRight size={20} />
                    </button>
                </div>

                {currentWeekOffset !== 0 && (
                    <div className="text-center mb-4">
                        <button
                            onClick={() => setCurrentWeekOffset(0)}
                            className="text-primary hover:text-primary-dark font-medium text-sm"
                        >
                            ← Back to Current Week
                        </button>
                    </div>
                )}
            </div>

            {/* Weekly Calendar */}
            <div className="grid md:grid-cols-7 gap-4">
                {weekDates.map((date, index) => {
                    const shift = getShiftForDate(date);
                    const isTodayDate = isToday(date);

                    return (
                        <div
                            key={index}
                            className={`bg-white rounded-xl shadow-md overflow-hidden border-2 transition-all ${isTodayDate ? 'border-primary ring-2 ring-primary/20' : 'border-transparent'
                                }`}
                        >
                            {/* Day Header */}
                            <div className={`p-4 text-center ${isTodayDate ? 'bg-primary text-white' : 'bg-gray-50'}`}>
                                <p className={`text-xs font-medium ${isTodayDate ? 'text-white' : 'text-gray-500'}`}>
                                    {dayNames[index]}
                                </p>
                                <p className={`text-2xl font-bold ${isTodayDate ? 'text-white' : 'text-gray-800'}`}>
                                    {date.getDate()}
                                </p>
                                {isTodayDate && <p className="text-xs mt-1">Today</p>}
                            </div>

                            {/* Shift Details */}
                            <div className="p-4">
                                {shift ? (
                                    <div className={`p-3 rounded-lg border-2 ${getShiftColor(shift.shift)}`}>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="font-bold text-sm">{shift.shift}</span>
                                            {getShiftTypeBadge(shift.type)}
                                        </div>
                                        <div className="space-y-1 text-xs">
                                            <div className="flex items-center gap-1">
                                                <Clock size={12} />
                                                <span>{shift.time}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <MapPin size={12} />
                                                <span className="truncate">{shift.department}</span>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-center py-6 text-gray-400">
                                        <Calendar size={24} className="mx-auto mb-2 opacity-50" />
                                        <p className="text-xs">No shift</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Legend */}
            <div className="bg-white rounded-xl shadow-md p-6 mt-6">
                <h3 className="font-bold text-gray-800 mb-4">Shift Types</h3>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded bg-blue-100 border-2 border-blue-200"></div>
                        <span className="text-sm text-gray-700">Morning Shift (8 AM - 4 PM)</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded bg-orange-100 border-2 border-orange-200"></div>
                        <span className="text-sm text-gray-700">Afternoon Shift (2 PM - 10 PM)</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded bg-purple-100 border-2 border-purple-200"></div>
                        <span className="text-sm text-gray-700">Night Shift (10 PM - 6 AM)</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
