const Contact = () => {
    return (
        <div>
            <h1 className="font-bold text-3xl p-4 m-4 text-center">Contact Us</h1>
            <form action="" className="text-center">
                <input
                    type="text"
                    className="border-black p-2 m-2"
                    placeholder="Name" />
                <input
                    type="text"
                    className="border-black p-2 m-2"
                    placeholder="Message" />
                <button className="cursor-pointer bg-green-600 rounded-2xl text-white  m-4 p-4">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Contact;