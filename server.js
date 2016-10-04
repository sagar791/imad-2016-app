var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));
var articles=
{
             'article-one':{
                    title: 'Article one |SAGAR',
                    heading: 'Article-one',
                    date:'Sept 5,2016',
                    content:`<div>
                                    <p>
                                        This is the content for my first article
                                        This is the content for my first article
                                        This is the content for my first article
                                        This is the content for my first article
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        This is the content for my first article
                                        This is the content for my first article
                                        This is the content for my first article
                                        This is the content for my first article
                                    </p>
                                </div>`
                },
            'article-two':{
                 title: 'Article two |SAGAR',
                    heading: 'Article-two',
                    date:'Sept 9,2016',
                    content:`<div>
                                    <p>
                                        This is the content for my  article
                                        This is the content for my  article
                                        This is the content for my  article
                                        This is the content for my  article
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        This is the content for my article
                                        This is the content for my article
                                        This is the content for my article
                                        This is the content for my article
                                    </p>
                                </div>`
            },
            'article-three':{
                 title: 'Article three |SAGAR',
                    heading: 'Article-three',
                    date:'Sept 5,2016',
                    content:`<div>
                                    <p>
                                        This is the content 
                                        This is the content 
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        This is the content for 
                                        This is the content for 
                                        
                                    </p>
                                </div>`
            }
                
};
function createtemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
var htmltemplate=
            `<html>
            <head>
            <title>
                ${title}
            </title>
                <meta name="viewport" content="width=device-width,initial-scale=1"/>
                <link href="/ui/style.css" rel="stylesheet"/>
            </head>
            <body>
                <div class="container">
                    <div>
                        <a href="/">Home</a>
                    </div>
                        <hr/>
                        <h3>
                         ${heading}
                        </h3>
                        <div>
                         ${date}
                        </div>
                        <div>
                        ${content}
                        </div>
                    </div>
            </body>
        </html>`;
        return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res){
   var articleName=req.params.articleName;
  res.send(createtemplate(articles[articleName]))}
  );

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
