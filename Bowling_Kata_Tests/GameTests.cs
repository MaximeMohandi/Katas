using Bowling_Kata;

namespace Bowling_Kata_Tests;

public class GameTests
{
    private readonly Game _game = new();


    [Fact]
    public void Should_returnTotalScore_WhenMultipleRolls()
    {
       _game.Roll(1);
       _game.Roll(2);

       int  score = _game.Score();

       Assert.Equal(3, score);
    }

    [Fact]
    public void Should_ReturnTotalScore_WhenPlayingAllFrames()
    {
        PlayEntireGameWithSamePin(1);

        int score = _game.Score();

        Assert.Equal(20, score);
    }

    [Fact]
    public void Should_HaveTwoRolls_ByFrame()
    {
        _game.Roll(1);
        _game.Roll(2);

        Assert.Equal(0, _game.CurrentFrame.RollLeft);
    }

    [Fact]
    public void Should_SwitchToNextFrame_EveryTwoRolls()
    {
        _game.Roll(1);
        _game.Roll(2);
        _game.Roll(3);

        Assert.Equal(1, _game.CurrentFrame.Number);
    }

    [Theory]
    [InlineData(11)]
    [InlineData(-1)]
    public void Should_throwError_When_numberOfPinedDownIsIncorrect(int pinnedDown)
    {
        Assert.Throws<InvalidNumberOfPinException>(() => _game.Roll(pinnedDown));
    }

    [Fact]
    public void Should_throwError_WhenNoMoreFrameToPlay()
    {
        PlayEntireGameWithSamePin(1);

        Assert.Throws<GameFinishedException>(() => _game.Roll(1));
    }


    [Fact]
    public void Should_GoToNextFrame_When_NoMorePinToKnockDown()
    {
        var expectedFrameNumber = 1;

        _game.Roll(10);
        _game.Roll(expectedFrameNumber);

        Assert.Equal(expectedFrameNumber, _game.CurrentFrame.Number);
    }

    [Fact]
    public void Should_AddNextRollScoreToPreviousFrame_When_Spare()
    {
        _game.Roll(9);
        _game.Roll(1);

        _game.Roll(1);

        var score = _game.Score();

        Assert.Equal(12,  score);
    }

    [Fact]
    public void Should_AddNextTwoRollScoreToPreviousFrame_When_Strike()
    {
        _game.Roll(10);

        _game.Roll(1);
        _game.Roll(2);

        var score = _game.Score();

        Assert.Equal(16,  score);
    }

    [Fact]
    public void Should_AddCorrectBonus_When_MultipleSpare()
    {
        _game.Roll(1);
        _game.Roll(9);

        _game.Roll(9);
        _game.Roll(1);

        _game.Roll(1);


        var score = _game.Score();

        Assert.Equal(31,  score);
    }

    [Fact]
    public void Should_AddCorrectBonus_When_MultipleStrike()
    {
        _game.Roll(10);
        _game.Roll(10);
        _game.Roll(1);
        _game.Roll(2);

        var score = _game.Score();

        Assert.Equal(37,  score);
    }


    private void PlayEntireGameWithSamePin(int pinnedDown)
    {
        for (var i = 0; i <= 19; i++)
        {
            _game.Roll(pinnedDown);
        }
    }

}
