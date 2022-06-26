import { useContext, useState, useEffect } from 'react';
import { client, routes } from '../utils/api';

/**
 * link.
 * @see https:// 
 *
 * @returns list
 
export default function useTaskManager() {
  const [user, setUser] = useState(true); // just dummy acess
  const [tasks, setTasks] = useState(null);

  useEffect(async () => {
    if (!user) return; // if not login

    try {
      const tasks = await Promise.all([
        client.get(routes.task.allTask('8477e32e-4871'))
      ]);
      setTasks(tasks);
    } catch (error) {
      console.error(error);
    }
  }, [user]);

  return tasks;
}
*/