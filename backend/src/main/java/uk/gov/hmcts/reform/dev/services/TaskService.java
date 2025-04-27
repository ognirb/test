package uk.gov.hmcts.reform.dev.services;

import org.springframework.stereotype.Service;
import uk.gov.hmcts.reform.dev.models.Task;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicLong;

@Service
public class TaskService {
    private final Map<Long, Task> taskMap = new HashMap<>();
    private final AtomicLong idGenerator = new AtomicLong(1);

    public Task createTask(Task task) {
        // Set the ID
        task.setId(idGenerator.getAndIncrement());

        // Set the creation date to now if not provided
        if (task.getCreatedDate() == null) {
            task.setCreatedDate(LocalDateTime.now());
        }

        taskMap.put(task.getId(), task);
        return task;
    }

    public Task getTask(Long id) {
        return taskMap.get(id);
    }

    public List<Task> getAllTasks() {
        return new ArrayList<>(taskMap.values());
    }

    public Task updateTaskStatus(Long id, String status) {
        Task task = taskMap.get(id);
        if (task != null) {
            task.setStatus(status);
            taskMap.put(id, task);
        }
        return task;
    }

    public Task saveTask(Task task) {
        taskMap.put(task.getId(), task);
        return task;
    }

    public boolean deleteTask(Long id) {
        return taskMap.remove(id) != null;
    }
}
