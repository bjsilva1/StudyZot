import Form from 'react-bootstrap/Form'
import { useState, useEffect } from 'react';

export function ThemeSwitch() {
    const [on, setOn] = useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches)

    function changeMode()  {
        setOn(!on)
    }

    useEffect(() => {
        const body = document.getElementById("body")
        if (on) {
            body?.setAttribute("data-bs-theme", "light")
        }
        else {
            body?.setAttribute("data-bs-theme", "dark")
        }
    });

    return(
      <Form>
        <Form.Switch
            id="light-dark-switch"
            onChange={changeMode}
            checked={on}
        />
      </Form>
    )
}
