
/**
 * Universal Credit link highlighter
 * @author Robert Koteles, Senior Web Developer
 * @description It makes the links added to the optional field of the job on https://www.universal-credit.service.gov.uk/work-search active and clickable.
 */


const urlify = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, '<a href="$1">$1</a>')
}
  
const enableLinks = () => { 
    let notes = document.querySelectorAll('.job-list__item-notes')
    
    notes.forEach(item => { 
        const text = item.innerHTML.replace('(', '').replace(')', '');
        item.innerHTML = urlify(text);
    })
}

enableLinks();