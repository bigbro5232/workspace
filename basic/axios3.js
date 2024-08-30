function fetchXml() {
    const url = 'note.xml';
    axios.get(url, {
        responseType: 'text'
    })
        .then(res => {
            // alert(res.data);
            const parser = new DOMParser();
            const xml = parser.parseFromString(res.data, 'application/xml');
            // note node에 접근
            const notes = xml.getElementsByTagName('note');
            // alert(notes.length);
            const result = document.querySelector('#result');
            result.innerHTML = `<h2>Note 목록</h2>`
            for (const note of notes) {
                const no = note.getAttribute("no");
                const to = note.getElementsByTagName('to')[0].textContent;
                const from = note.getElementsByTagName('from')[0].textContent;
                const heading = note.getElementsByTagName('heading')[0].textContent;
                const body = note.getElementsByTagName('body')[0].textContent;
                result.innerHTML += `
                    <div style = "width : 60%; margin : auto; border : 1px solid silver; padding : 1em">
                        <h3>No: ${no}</h3>
                        <h3>To: ${to}</h3>
                        <h3>From: ${from}</h3>
                        <h3>Heading: ${heading}</h3>
                        <h3>Body: ${body}</h3>
                    </div>
                `
            }
        })
        .catch((err) => {
            alert(err);
        })

}