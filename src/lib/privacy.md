This is a quick reference. For more detail, see [John Gruber's original documents](https://daringfireball.net/projects/markdown/) or [the Github-flavored Markdown](https://help.github.com/categories/writing-on-github/).

> ### [GitHub Help](https://help.github.com/categories/writing-on-github/.)
>
> ![]()

> ### [Daring Fireball: Markdown](https://daringfireball.net/projects/markdown/)
>
> ![]()

## Headings

To create a heading, add one to six \# symbols before your heading text.

```
# The largest heading
## The second largest heading
###### The smallest heading
```

show as below:

> # The largest heading
>
> ## The second largest heading
>
> ###### The smallest heading

## Styling text

You can indicate emphasis with bold, italic, or strikethrough text.

```
*This text is italicized*
_This text is italicized too_
**This is bold text**
__This is bold text too__
~~This was mistaken text~~
```

> _This text is italicized_ > _This text is italicized too_ > **This is bold text** > **This is bold text too**
> ~~This was mistaken text~~

## Quoting text

You can quote text with a \>.

```
> You can quote text with a >.

> > This is a nested quoting text.
```

This text is show as below.

> You can quote text with a >.

> > This is a nested quoting text.

## Quoting code

### Inline code

You can call out code or a command within a sentence with single backticks.

```
Inline `code` has `back-ticks around` it.
```

> Inline `code` has `back-ticks around` it.

### Blocks of code

To format code or text into its own distinct block, use triple backticks.

> Some basic Git commands are:
> \```
> git status
> git add
> git commit
> \```

> Some basic Git commands are:
>
> ```
> git status
> git add
> git commit
> ```

## Links

You can create an inline link by wrapping link text in brackets [ ], and then wrapping the URL in parentheses ( ).

```
This site was built using [GitHub Pages](https://pages.github.com/).
```

> This site was built using [GitHub Pages](https://pages.github.com/).

## Images

```
Inline-style: ![alt text](/images/logo_transparent_300.png "Placeholder Image")
```

> Inline-style: ![alt text](/images/logo_transparent_300.png 'Placeholder Image')

## Lists

You can make an unordered list by preceding one or more lines of text with - or \*.

```
- George Washington
- John Adams
- Thomas Jefferson
```

> - George Washington
> - John Adams
> - Thomas Jefferson

### Tables

You can create tables with pipes | and hyphens -.

```
| Left-aligned | Center-aligned | Right-aligned |
| :---         |     :---:      |          ---: |
| git status   | git status     | git status    |
| git diff     | git diff       | git diff      |
```

| Left-aligned | Center-aligned | Right-aligned |
| :----------- | :------------: | ------------: |
| git status   |   git status   |    git status |
| git diff     |    git diff    |      git diff |

You can align text to the left, right, or center of a column by including colons : to the left, right, or on both sides of the hyphens within the header row.

