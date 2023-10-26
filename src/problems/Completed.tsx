import React from 'react'

export default function Completed() {
  return (
    <div>
    /*How many types of headers are there? Make one of each header */
    <div>
      <h1>Heading One</h1>
      <h2>Heading Two</h2>
      <h3>Heading Three</h3>
      <h4>Heading Four</h4>
      <h5>Heading Five</h5>
      <h6>Heading Six</h6>
    </div>
    /*Make a div with a paragraph. In it add some bold, italics text */
      <div>
        <p>
          Paragraph One: This one will demonstrate the use of a few inline tags
          <br />
          <strong>The first one is 'strong'. It makes the text "stronger"
          which in most cases is just bolding the text</strong>
          <br />
          <em>The next one is 'em' which stands for emphasize. By default it is italic</em>
        </p>
      </div>
    /*Add redirecting links of three types:
        1. That directs to nothing
        2. Directs to a new page
        3. Directs to a new page in a different tab */
      <div>
        <a href="">This directs it to nothing</a>
        <br />
        <a href="http://google.com">This directs to google</a>
        <br />
        <a href="http://google.com" target="_blank">This directs to google, too. It opens a new page, however</a> 
        <br />
      </div>
    /*Make an unordered list*/
    <div>
        <ul>
            <li>pen</li>
            <li>pencil</li>
            <li>marker</li>
            <li>highlighter</li>
        </ul>
    </div>
    /*Make an ordered list*/
      <div>
        <ol>
            <li>Breakfast</li>
            <li>Brunch</li>
            <li>Lunch</li>
            <li>Dinner</li>
        </ol>
      </div>
    /*Make a table*/
    <div>
    <table>
            <thead>
                <tr>
                    <th>Meal</th>
                    <th>Time</th>
                    <th>Venue</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Lunch</td>
                    <td>1:00</td>
                    <td>Foothill</td>
                </tr>
                <tr>
                    <td>Dinner</td>
                    <td>7:00</td>
                    <td>Crossroads</td>

                </tr>
            </tbody>
        </table>
    </div>
    </div>
  )
}