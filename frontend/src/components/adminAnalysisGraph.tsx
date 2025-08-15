import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface AdminAnalysisGraphProps {
    completed?: number;
    inProgress?: number;
    pending?: number;
    height?: number;
    innerRadius?: number;
    outerRadius?: number;
}

// Named export
const AdminAnalysisGraph: React.FC<AdminAnalysisGraphProps> = ({
                                                                          completed=100,
                                                                          inProgress=200,
                                                                          pending=200,
                                                                          height = 200,
                                                                          innerRadius = 50,
                                                                          outerRadius = 80,
                                                                      }) => {
    const taskData = [
        { name: 'Completed', value: completed, color: '#22C55E' },
        { name: 'In Progress', value: inProgress, color: '#EF4444' },
        { name: 'Pending', value: pending, color: '#A855F7' },
    ];

    return (
        <div className="bg-gray-100 p-6 rounded-lg border-2 border-blue-400 w-full max-w-2xl">
            <h3 className="text-purple-600 font-semibold mb-4">Overall Task Status</h3>

            {/* Chart Container */}
            <div style={{ height: `${height}px` }} className="mb-4">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={taskData}
                            cx="50%"
                            cy="50%"
                            innerRadius={innerRadius}
                            outerRadius={outerRadius}
                            paddingAngle={0}
                            dataKey="value"
                        >
                            {taskData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>

            {/* Legend */}
            <div className="flex justify-center gap-6 flex-wrap">
                {taskData.map((item, index) => (
                    <div key={index} className="flex items-center">
                        <div
                            className="w-3 h-3 rounded-full mr-2"
                            style={{ backgroundColor: item.color }}
                        />
                        <span className="text-sm text-gray-700">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminAnalysisGraph
