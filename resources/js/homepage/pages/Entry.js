export function Entry() {
    return (
        <>
            <div >
                <form className="entry">
                    <input type='hidden' name='user_id' />
                    <input type='date' name='date' />
                    <label>Rate your day from 0 to 10:</label>
                    <input type='number' name='rate' defaultValue={0} />
                    <textarea type='note' name='note' style={{ height: '400px' }} placeholder="Here you can add a note about your day, some ideas and insights, who you are grateful for something..." />
                    <input type='text' name='picture' />
                    <input type='submit' value='Save' />
                </form>

            </div>
        </>

    )
}