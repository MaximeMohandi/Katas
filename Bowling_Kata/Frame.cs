namespace Bowling_Kata;

public class Frame(int frameNumber)
{
    public int Number { get; } = frameNumber;
    public int Score { get; private set; }
    public int RollLeft { get; private set; } = 2;
    public int PinLeft { get; private set; } = 10;

    public SpecialScore SpecialScore { get; private set; } = SpecialScore.None;

    public void KnockedDownPin(int pin)
    {
        Score += pin;
        PinLeft -= pin;
        RollLeft--;

        if (RollLeft == 0 && PinLeft == 0)
            SpecialScore = SpecialScore.Spare;

        if(RollLeft ==1  && PinLeft == 0)
            SpecialScore = SpecialScore.Strike;
    }
    public void AddBonus(int bonus)
    {
        Score += bonus;
    }
}

public enum SpecialScore
{
    None,
    Spare,
    Strike
}
