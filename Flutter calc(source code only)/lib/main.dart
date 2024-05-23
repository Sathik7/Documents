import 'package:flutter/material.dart';

void main()=> runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
      return MaterialApp(
        theme: ThemeData(
          primarySwatch: Colors.teal,
      ),
       home: HomePage(),
        debugShowCheckedModeBanner: false,
    );
  }
}

class HomePage extends StatefulWidget {

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title:
      Text('Calculator',style: TextStyle(color: Colors.white),),
      backgroundColor: Colors.teal,
      ),
      body: Container(
        child: Column(
          children: <Widget>[
            Expanded(
                child: Container(
                  padding: EdgeInsets.all(20.0),
                  alignment: Alignment.bottomRight,
                  child: Text(
                    text,
                    style: TextStyle(
                      fontSize: 50.0,
                      fontWeight: FontWeight.w500,
                    )
                  ),
            )),
            Row(
              children: <Widget>[
                customOutlineButton("9"),
                customOutlineButton("8"),
                customOutlineButton("7"),
                customOutlineButton("+"),
              ],
            ),
            Row(
              children: <Widget>[
                customOutlineButton("6"),
                customOutlineButton("5"),
                customOutlineButton("4"),
                customOutlineButton("-"),
              ],
            ),
            Row(
              children: <Widget>[
                customOutlineButton("3"),
                customOutlineButton("2"),
                customOutlineButton("1"),
                customOutlineButton("x"),
              ],
            ),
            Row(
              children: <Widget>[
                customOutlineButton("C"),
                customOutlineButton("0"),
                customOutlineButton("="),
                customOutlineButton("/"),
              ],
            ),
          ],
        ),
      ),
    );
  }

  Widget customOutlineButton(String val) {
    return Expanded(
      child: Padding(
        padding: const EdgeInsets.fromLTRB(2.0,10.0,2.0,10.0),
        child: ElevatedButton(
          style: ElevatedButton.styleFrom(
            padding: EdgeInsets.fromLTRB(0,25.0,0,25.0),

          ),
          onPressed: () => btnClicked(val),
          child: Text(
            val,
            style: TextStyle(fontSize: 25.0),
          ),
        ),
      )
    );
  }
  int f=0,s=0;
  String res="",text="",op="";
  void btnClicked(String btnText){
    if(btnText=="C"){
      res="";
      text="";
    }
    else if(btnText=="+" || btnText=="-" || btnText=="x" || btnText=="/"){
      f=int.parse(text);
      res="";
      op=btnText;
    }
    else if (btnText=="="){
      s=int.parse(text);
      switch(op){
        case "+":
          int sum = f+s;
          res= sum.toString();
          break;
        case "-":
          int sum = f-s;
          res= sum.toString();
          break;
        case "x":
          int sum = f*s;
          res= sum.toString();
          break;
        case "/":
          double sum = f/s;
          res= sum.toString();
          break;
        default:
          res="INVALID OPERATION";

      }
    }
    else{
      res=text+btnText;
    }
    setState((){
      text=res;
    });
  }
}

