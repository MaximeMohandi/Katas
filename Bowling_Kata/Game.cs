namespace Bowling_Kata;

public class Game
{
    private const int MaximumNumberOfPins = 10;
    private const int MaximumFrameNumber = 10;

    private readonly List<Frame> _frames = [];

    public Frame CurrentFrame { get; private set; }
    private Frame PreviousFrame { get; set; }

    public Game()
    {
        InitializeFrame();
    }

    private void InitializeFrame()
    {
        for (var i = 0; i < MaximumFrameNumber; i++)
        {
            _frames.Add(new Frame(i));
        }
        CurrentFrame = _frames.First();
    }


    public void Roll(int knockedDownPin)
    {
        if (knockedDownPin is < 0 or > MaximumNumberOfPins)
            throw new InvalidNumberOfPinException();

        if (CurrentFrame.PinLeft == 0 || CurrentFrame.RollLeft == 0)
            GoToNextFrame();

        if(!IsFirstFrame()
           && PreviousFrame.SpecialScore == SpecialScore.Spare
           && CurrentFrame.RollLeft == 2)
            PreviousFrame.AddBonus(knockedDownPin);

        if(!IsFirstFrame()
           &&  PreviousFrame.SpecialScore == SpecialScore.Strike)
        {
            PreviousFrame.AddBonus(knockedDownPin);
            if (PreviousFrame.Number>0 && PreviousFrame.SpecialScore == SpecialScore.Strike)
            {
                _frames[PreviousFrame.Number-1].AddBonus(knockedDownPin);
            }
        }

        CurrentFrame.KnockedDownPin(knockedDownPin);
    }

    private bool IsFirstFrame() => CurrentFrame.Number == 0;

    private void GoToNextFrame()
    {
        if (CurrentFrame.Number+1 == MaximumFrameNumber)
        {
            throw new GameFinishedException();
        }
        PreviousFrame = CurrentFrame;
        CurrentFrame = _frames[CurrentFrame.Number +1];
    }


    public int Score()
    {
        return _frames.Sum(frame => frame.Score);
    }
}
