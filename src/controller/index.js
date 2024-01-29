const homePage = (req, res) => {
    try {
        res.status(200).send(`
     <div style="background-color:skyblue;  color:black; padding:20px; border-radius:20px; margin:13em;">
        <h1 style="display: flex; justify-content: center; align-items: center;">NodeJS_Hall_Booking_API_Task</h1>
            <div style="display: flex; justify-content: center; align-items: center;">
                <ul>
                    <li>Get all Rooms = endpoint: /rooms</li>
                    <li>New Hall Booking = endpoint/:id </li>
                    <li>Take a list of Booked rooms = endpoint: /rooms/customer</li>
                    <li>Create a new room = endpoint: /rooms/</li>
                </ul>
            </div>
     </div>
     `)
    } catch (error) {
        res.status(500).send({
            message:"Internal server Error"
        })
    }
  }
  
  export default { homePage }