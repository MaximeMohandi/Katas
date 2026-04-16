namespace Bowling_Kata;

public class InvalidNumberOfPinException : Exception
{

}
public class GameFinishedException : Exception
{
    public GameFinishedException() { }
}

public class NoMorePinLeftException : Exception
{
    public NoMorePinLeftException() { }
}
