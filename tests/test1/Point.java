import java.io.*;
import java.util.*;


public class Point {

    // Should be double
    private double x,y;
    
    /* An equivalent set method would have been ok */
    public Point(double xcor,ycor) {
	x = xcor;
	y = ycor;
    }

    public double distance(Point other) {
	// Could use other.getX() if you wrote it instead of 
	// direct access
	double apart = (other.x - x) * (other.x - x);
	double bpart = (other.y - y) * (other.y - y);
	return Math.sqrt(apart+bpart);

    }

}

