import QuestionInfo from "./_models/QuestionInfo";


export default [
    new QuestionInfo(
        "Why is my check engine light on?",
        "Spark plugs in today's vehicles are typically replaced anywhere between every 30,000 miles and 100,000 miles, depending on the vehicle and type of spark plugs. Please refer to your owner's manual for factory recommended maintenance intervals for your specific vehicle. Trouble with the ignition system is typically signified by an engine that surges, runs rough, stalls or gets abnormally poor gas mileage. Another indication is the CHECK ENGINE LIGHT indicator on the dashboard lights. If the CHECK ENGINE LIGHT illuminates, have its cause checked out as soon as you can."
    ),
    new QuestionInfo(
        "What is Catalytic Converter?",
        "The purpose of the catalytic converter is to convert toxic gases and pollutants from the engine into the exhaust system creating less toxic pollutants and reducing harmful exhaust emissions."
    ),
    new QuestionInfo(
        "Why am I getting Heat Exchanger Temperature Error in my MRI machine?",
        "<b>Cause:</b> If the water pumping through your system is not cool enough, your MRI will lock-up and disallow scanning until the temperature can be brought back down to specified levels.</br><b>Solution:</b> The first thing you’ll want to do is find out who you should contact for help. Start with the heat exchanger. Check to see if its LCD display is lit. Many models also have breakers on them. Is the breaker set? Feel the incoming water line. It should feel roughly the same temperature as a soda from your refrigerator. If your heat exchanger’s LCD is not lit and tripping the breaker has no effect, the problem is likely in that component and you should contact your MRI service group. If the water being fed into your heat exchanger is too warm, the problem is more likely originating in your chiller. In that case, you should contact the HVAC vendor that services your chiller."
    ),
    new QuestionInfo(
        "I get an Improper Data Error 0003 in our Fagor CNC machine. What does that mean?",
        "<b>Cause:</b> The possible causes are: <ul><li>When editing an axis coordinate after the cutting conditions (F, S, T or D) or the &quot;M&quot; functions.</li><li>When the marks of the block skip (conditional block /1, /2 or /3) are not at the beginning of the block.</li><li>When programming a block number greater than 99999999 while programming in ISO code.</li><li>When trying to define the coordinates of the machining starting point in the finishing operation (G68) of the &quot;Irregular pocket canned cycle&quot;.</li><li>While programming in high-level, the value of the RPT instruction exceeds 9999.</li></ul><b>Solution:</b> The solution for each cause is:<ul><li>Remember the programming order.<ul><li>Block skip (conditional block /1, /2 or /3)</li><li>Label (N)</li><li>&quot;G&quot; functions</li><li>Axis coordinates (X, Y, Z…)</li><li>Machining conditions (F, S, T, D)</li><li>&quot;M&quot; functions</li></ul><li>Correct the syntax of the block. Program the labels between 0 and 99999999.</li><li>No point can be programmed within the definition of the finishing cycle (G68) for the &quot;Irregular pocket canned cycle. The CNC selects the point where it will start machining. The programming format is: G68 B...L...Q...I...R...K...V... And then the cutting conditions.</li><li>Correct the syntax of the block. Program a number of repetitions between 0 and 9999.</li></ul>"
    ),
    new QuestionInfo(
        "Why are all control inoperative from base control console in my Skyjack SJIII Compact Series?",
        "<b>Cause:</b> <ul><li>Loose or broken wire #10E from base key switch S10 to base up/down switch S2</li><li>Loose or broken wire #10E from base terminal block to CM1 control module pin P2-2</li></ul></br><b>Solutions:</b> Check continuity. Replace if defective."
    )
]
