# [Task-list App using React JS](https://dev-caroline-tasklist-react.netlify.app/)

:pushpin: This project was my first React App 

<img width="1065" alt="Schermata 2022-08-22 alle 18 39 30" src="https://user-images.githubusercontent.com/104517812/185973819-eed8e244-48bb-4a4f-a749-0ad3c6baa4e1.png">


## As a user, you can do:
 - Read a list of tasks;
 - Add a task using the mouse or keyboard;
 - Mark any task as completed or return as incomplete;
 - Delete any task, using the mouse or keyboard.


<img width="300" alt="print screen1" src="https://user-images.githubusercontent.com/104517812/185975273-1c90a348-94fe-4bbf-8cdf-5b36f4c896e3.png">
<img width="300" alt="print screen2" src="https://user-images.githubusercontent.com/104517812/185975290-b734c50e-d743-468f-9262-260a5f54876d.png">
<img width="300" alt="print screen3" src="https://user-images.githubusercontent.com/104517812/185975305-0fa0edd0-cf18-4a1d-abd8-403369e3905c.png">


# My challenges with this project:
- I chose to make a task-list as a project because I already made one of these using JavaScrip and I would like to get to know the differences of a React App with the same functionalities.

# What I've learned:
- props to pass data from a parent component to a child component
- consuming data from an API
- useEffect to executes a block of code whenever a variable changes. In this case, to consume API data when website loads
```
  useEffect(() => {
      const fetchTasks = async () => {
      const {data} = await axios.get("https://jsonplaceholder.cypress.io/todos?_limit=10")
      setTasks(data)
    }
    fetchTasks()
  }, [])
 
```

# Link
- Live Site URL: https://dev-caroline-tasklist-react.netlify.app/


> This project was based on a video lesson from Felipe Rocha
