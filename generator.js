$(document).ready(function(){
		var quoteSource=[
		{
			quote: "Frank Lampard has still got the same legs he had five years ago",
			name:"Ray Wilkins"
	    },
	    {
	    	quote:"Sessegnon gets it on his left hand foot",
	    	name:"Iain Dowie"
	    },
	    {
	    	quote:"In his interviews, Beckham manages to sit on the fence very well and keeps both ears on the ground.",
	    	name:"Brian Kerr"
	    },
	    {
	    	quote:"In the last year, 46 of the 92 managers have lost their jobs – that’s over half.",
	    	name:"David Pleat"
	    },
	    {
	    	quote:"Who’ll win the league? It’s a toss of a coin between three of them",
	    	name:"Matt Le Tissier"
	    },
	    {
	    	quote:"There’s no such thing as a must-win game, and this is one of them",
	    	name:"Alan Wright"
	    },
	    {
	    	quote:"Welbeck, Rooney and Van Persie can be a phenomical strike force.",
	    	name:"Keith Curle"
	    },
	    {
	    	quote:"I’m not prepared to make any comments on the World Cup in Qatar in 1922",
	    	name:"Roy Hodgeson"
	    },
	    {
	    	quote:"It depends on the quality of the eggs in the supermarket... when the class one eggs are not available you have a problem.",
	    	name:"Jose Mourinho"
	    },
	    {
	    	quote:"If Everton were playing down the bottom of my garden, I'd draw the curtains.",
	    	name:"Bill Shankly"
	    },
	    {
	    	quote:"Whichever teams scores more goals usually wins",
	    	name:"Michael Owen"
	    },
	    {
	    	quote:"You have to believe your own eyes, don't you?",
	    	name:"Michael Owen"
	    },
	    {
	    	quote:"It’s hit the facial part of his head.",
	    	name:"Michael Owen"
	    },
	    {
	    	quote:"I've been consistent in patches this season",
	    	name:"Theo Walcott"
	    },
	    {
	    	quote:"They were numerically outnumbered",
	    	name:" Garry Birtles"
	    },
	    {
	    	quote:"Not to win is guttering",
	    	name:"Mark Noble"
	    },
	    {
	    	quote:"And with 4 minutes gone, the score is already 0-0",
	    	name:"Ian Dark"
	    },
	    {
	    	quote:"Strangely, in slow motion replay, the ball seemed to hang in the air for even longer.",
	    	name:"David Acfield"
	    },
	    {
	    	quote:"Glenn Hoddle hasn't been the Hoddle we know. Neither has Bryan Robson.",
	    	name:"Ron Greenwood"
	    },
	    {
	    	quote:"I don't think there is anybody bigger or smaller than Maradona.",
	    	name:"Kevin Keegan"
	    },
	    {
	    	quote:"For those of you watching in black and white, Spurs are in the all-yellow strip.",
	    	name:"John Motson"
	    },
	    {
	    	quote:"I never comment on referees and I'm not going to break the habit of a lifetime for that prat.",
	    	name:"Ron Atkinson"
	    },
	    {
	    	quote:"You don't score 64 goals in 86 games at the highest level without being able to score goals",
	    	name:"Alan Green"
	    },
	    {
	    	quote:"Matty Jarvis had acres of time there",
	    	name:"Stan Collymore"
	    },
      {
	    	quote:"It's an unprecedented precedent",
	    	name:"Clark Carlisle"
	    },
            {
	    	quote:"I couldn't settle in Italy. It was like living in a foreign country.",
	    	name:"Ian Rush"
	    },
      {
	    	quote:"I look forward to hearing from the silent majority",
	    	name:"Alex McLeish"
	    },
            {
	    	quote:"I haven't seen it, but it looks generous",
	    	name:"Arsene Wenger"
	    },
                  {
	    	quote:"I don't want Rooney to leave these shores but if he does, I think he'll go abroad",
	    	name:"Ian Wright"
	    },
                 {
	    	quote:"Luis Suarez is a victim of his own make-up",
	    	name:"Micky Quinn"
	    },
                       {
	    	quote:"Matt Taylor ran half the length of the field, width-wise",
	    	name:"Ian Abrahams"
	    },
                             {
	    	quote:"Sometimes you want Obertan to open his legs and do something a bit exciting",
	    	name:"Alan Pardew"
	    },
                                   {
	    	quote:"With Harry, two plus two always makes five, not three",
	    	name:"Milan Mandaric"
	    },
                                         {
	    	quote:"One win doesn't make a swallow",
	    	name:"Danny Kelly"
	    },
      {
	    	quote:"Today was about our lack of ability to not produce the ability we've got",
	    	name:"Sam Allardyce"
	    },
            {
	    	quote:"After Chelsea scored, Bolton epitulated",
	    	name:"Paul Merson"
	    },
                  {
	    	quote:"Jordan Henderson is a player who likes to do his business in the middle of the park",
	    	name:"Jason McAteer"
	    },
        {
      	    	quote:"If you closed your eyes, you couldn't tell the difference between the two sides",
	    	name:"Phil Brown"
	    },
              {
      	    	quote:"If you closed your eyes, you couldn't tell the difference between the two sides",
	    	name:"Phil Brown"
	    },
                    {
      	    	quote:"I hope to be back in management in the next future",
	    	name:"Paul Ince"
	    },
                          {
      	    	quote:"John Terry wears his shirt on his sleeve",
	    	name:"Ray Parlour"
	    },
                {
      	    	quote:"Neither team has really taken the baton by the scruff of the neck and put their stamp on it",
	    	name:"Nigel Worthington"
	    },
                      {
      	    	quote:"Fernando Torres needs to be loved on a regular basis",
	    	name:"Mark Lawrenson"
	    },
                          {
      	    	quote:"We couldn't defend a fish supper",
	    	name:"Sam Allardyce"
	    },
                                {
      	    	quote:"In the FA Cup, you always have to expect the unexpectable",
	    	name:"Roberto Di Matteo"
	    },
                                 {
      	    	quote:"There are so many sides down there at the top",
	    	name:"Mark Saggers"
	    },
                                       {
      	    	quote:"Most goals are scored between the posts",
	    	name:"Jamie Redknapp"
	    },
                                             {
      	    	quote:"Where do you sit on young players, Martin Keown?",
	    	name:"Jonathan Pearce"
	    },
         {
      	    	quote:"We have this mentality of going into every game just thinking about the next game",
	    	name:"Shane Long"
	    },
          {
      	    	quote:"We have this mentality of going into every game just thinking about the next game",
	    	name:"Shane Long"
	    },
                {
      	    	quote:"Steven Fletcher cost a very lot of money",
	    	name:"Chris Waddle"
	    },
                      {
      	    	quote:"If you don't question the officials' role then you've got to ask what they are doing",
	    	name:"Arsene Wenger"
	    },
                      {
      	    	quote:"In the first half, I didn't see the second half coming, that's for sure",
	    	name:"Mick McCarthy"
	    },
                            {
      	    	quote:"The FA inquiry has been a farce from start to finish and it's not even finished",
	    	name:"Dietmar Hamann"
	    },
        {
      	    	quote:"If we'd have scored, it would have been a different result",
	    	name:"Tony Pulis"
	    },
          {
      	    	quote:"There's a lot of work been put in that hasn't been put in",
	    	name:"Glenn Hoddle"
	    },
           {
      	    	quote:"As long as you hit the target, they're going to go in... if the keeper don't make a save",
	    	name:"Ian Holloway"
	    },
	];
		

		$('#quoteButton').click(function(evt){
			//define the containers of the info we target
			var quote = $('#quoteContainer p').text();
			var quoteGenius = $('#quoteGenius').text();
			//prevent browser's default action
			evt.preventDefault();
			//getting a new random number to attach to a quote and setting a limit
			var sourceLength = quoteSource.length;
			var randomNumber= Math.floor(Math.random()*sourceLength);
			//set a new quote
			for(i=0;i<=sourceLength;i+=1){
			var newQuoteText = quoteSource[randomNumber].quote;
			var newQuoteGenius = quoteSource[randomNumber].name;
			//console.log(newQuoteText,newQuoteGenius);
      var timeAnimation = 500;
      var quoteContainer = $('#quoteContainer');
      //fade out animation with callback
      quoteContainer.fadeOut(timeAnimation, function(){
        quoteContainer.html('');
				quoteContainer.append('<p>'+newQuoteText+'</p>'+'<p id="quoteGenius">'+'-								'+newQuoteGenius+'</p>');
        
        //fadein animation.
        quoteContainer.fadeIn(timeAnimation);
      });  
			
			break;
		};//end for loop
	
	});//end quoteButton function
		
		
});//end document ready