//TODO: Convert all functions and any other possible elements to ES6

/**
 * Update the output text as you type in the textarea
 */
updateText = () => {
    let text = document.getElementById("text-input").value;
    document.getElementById('text-output').innerText = text;
  }
  
  /**
   * Toggle the bold class for the output text
   */
makeBold = (elem) => {
    elem.classList.toggle('active');
    document.getElementById('text-output').classList.toggle('bold');
  }
  
  /**
   * Toggle the italic class for the output text
   */
makeItalic = (elem) => {
    elem.classList.toggle('active');
    document.getElementById('text-output').classList.toggle('italic');
  }
  
  /**
   * Toggle the underline class for the output text
   * use contains ,romve , and add functions
   */
makeUnderline = (elem) => {
    elem.classList.toggle('active');
    let output = document.getElementById('text-output');
    if(output.classList.contains('underline')){
      output.classList.remove('underline');
    } else {
      output.classList.add('underline');
    }
}

  /**
   * Toggle the style textAlign attribute
   * Toggle the active state for the align butttons
   */
alignText = (elem, alignType) => {
  document.getElementById('text-output').style.textAlign  = alignType;
  let alignButtons = document.getElementsByClassName('align');
  for(k of alignButtons){
    k.classList.remove('active')
  }
  // alignButtons = alignButtons.map((button)=>{
  //   return button.classList.remove('active')
  // }) -------> this wont work on html elements (actully html elements are not array )
  elem.classList.toggle('active');
}