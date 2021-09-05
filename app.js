const express = require('express'),
app =express()

require ('dotenv').config()

const handlebars = require('express-handlebars')

app.set('view engine','hbs')

app.engine('hbs',handlebars({layoutsDir: `${__dirname}/views/layouts`, extname :'hbs',  defaultLayout: 'index', partialsDir: `${__dirname}/views/partials`}))

app.use(express.static('public'))

const num = () => {return [
    {
      name: 'one',
    },
    {
      name: 'two',
    },
    {
      name: 'three',
    },
    {
      name: 'five',
    },
    {
      name: 'seven',
    }
  ];
}

app.get('/', (req,res) => {
    res.render('main',{layout:'index', theNumber: num(), listExists: true})
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () =>{
    console.log(`listening on port: ${PORT}`)
})