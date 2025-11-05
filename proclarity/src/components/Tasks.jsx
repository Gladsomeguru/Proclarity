import { useEffect, useState } from "react";

const Tasks = ({ tasks }) => {
    useEffect(() => {
        console.log('tasks==>', tasks);
    }, []);

    return (
        <div className="flex flex-col justify-center h-full w-1/4">
            {tasks.map((task, index) => (
                <div key={task.id} className="rounded-lg p-4 mb-4 w-full max-w-md bg-white shadow-md dark:bg-slate-900">
                    <h2 className="text-xl font-semibold mb-2 text-emerald-800 dark:text-slate-300">{task.title}</h2>
                    <p className="text-emerald-700 dark:text-slate-500">{task.description}</p>
                </div>
            ))
            }
        </div>
    )
}

export default Tasks;