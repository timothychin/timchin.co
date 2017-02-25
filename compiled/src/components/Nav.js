"use strict";

var Nav = function Nav() {
  return React.createElement(
    "nav",
    null,
    React.createElement(
      "div",
      { className: "nav-container" },
      React.createElement(
        "span",
        { className: "title" },
        "TIMOTHY CHIN"
      ),
      React.createElement(
        "span",
        { className: "description" },
        " Software Engineer"
      ),
      React.createElement(
        "ul",
        { className: "media-icons-container" },
        React.createElement(
          "li",
          { className: "media-icons" },
          React.createElement(
            "a",
            { href: "https://www.linkedin.com/in/chintimothy", target: "_blank" },
            React.createElement("i", { className: "fa fa-linkedin-square" })
          )
        ),
        React.createElement(
          "li",
          { className: "media-icons" },
          React.createElement(
            "a",
            { href: "https://github.com/timothychin", target: "_blank" },
            React.createElement("i", { className: "fa fa-github-square" })
          )
        ),
        React.createElement(
          "li",
          { className: "media-icons" },
          React.createElement(
            "a",
            { href: "https://drive.google.com/file/d/0B9eXeLfM_UvFSmxuakpiazFEeE0/view", target: "_blank" },
            React.createElement("i", { className: "fa fa-file-text" })
          )
        ),
        React.createElement(
          "li",
          { className: "media-icons" },
          React.createElement(
            "a",
            { href: "mailto:timm.chin@gmail.com", target: "_top" },
            React.createElement("i", { className: "fa fa-envelope" })
          )
        )
      )
    )
  );
};

window.Nav = Nav;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL05hdi5qc3giXSwibmFtZXMiOlsiTmF2Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLE1BQU0sU0FBTkEsR0FBTTtBQUFBLFNBQ1I7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBLFFBQUssV0FBVSxlQUFmO0FBQ0U7QUFBQTtBQUFBLFVBQU0sV0FBVSxPQUFoQjtBQUFBO0FBQUEsT0FERjtBQUVFO0FBQUE7QUFBQSxVQUFNLFdBQVUsYUFBaEI7QUFBQTtBQUFBLE9BRkY7QUFHRTtBQUFBO0FBQUEsVUFBSSxXQUFVLHVCQUFkO0FBQ0U7QUFBQTtBQUFBLFlBQUksV0FBVSxhQUFkO0FBQ0U7QUFBQTtBQUFBLGNBQUcsTUFBSyx5Q0FBUixFQUFrRCxRQUFPLFFBQXpEO0FBQWtFLHVDQUFHLFdBQVUsdUJBQWI7QUFBbEU7QUFERixTQURGO0FBSUU7QUFBQTtBQUFBLFlBQUksV0FBVSxhQUFkO0FBQ0U7QUFBQTtBQUFBLGNBQUcsTUFBSyxnQ0FBUixFQUF5QyxRQUFPLFFBQWhEO0FBQXlELHVDQUFHLFdBQVUscUJBQWI7QUFBekQ7QUFERixTQUpGO0FBT0U7QUFBQTtBQUFBLFlBQUksV0FBVSxhQUFkO0FBQ0U7QUFBQTtBQUFBLGNBQUcsTUFBSyxtRUFBUixFQUE0RSxRQUFPLFFBQW5GO0FBQTRGLHVDQUFHLFdBQVUsaUJBQWI7QUFBNUY7QUFERixTQVBGO0FBVUU7QUFBQTtBQUFBLFlBQUksV0FBVSxhQUFkO0FBQ0U7QUFBQTtBQUFBLGNBQUcsTUFBSyw0QkFBUixFQUFxQyxRQUFPLE1BQTVDO0FBQW1ELHVDQUFHLFdBQVUsZ0JBQWI7QUFBbkQ7QUFERjtBQVZGO0FBSEY7QUFEQSxHQURRO0FBQUEsQ0FBVjs7QUF1QkFDLE9BQU9ELEdBQVAsR0FBYUEsR0FBYiIsImZpbGUiOiJOYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgTmF2ID0gKCkgPT4gKFxuICA8bmF2PlxuICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1jb250YWluZXJcIj5cbiAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPlRJTU9USFkgQ0hJTjwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPiBTb2Z0d2FyZSBFbmdpbmVlcjwvc3Bhbj5cbiAgICA8dWwgY2xhc3NOYW1lPVwibWVkaWEtaWNvbnMtY29udGFpbmVyXCI+XG4gICAgICA8bGkgY2xhc3NOYW1lPVwibWVkaWEtaWNvbnNcIj5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9jaGludGltb3RoeVwiIHRhcmdldD1cIl9ibGFua1wiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWxpbmtlZGluLXNxdWFyZVwiPjwvaT48L2E+XG4gICAgICA8L2xpPlxuICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lZGlhLWljb25zXCI+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdGltb3RoeWNoaW5cIiB0YXJnZXQ9XCJfYmxhbmtcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1naXRodWItc3F1YXJlXCI+PC9pPjwvYT5cbiAgICAgIDwvbGk+XG4gICAgICA8bGkgY2xhc3NOYW1lPVwibWVkaWEtaWNvbnNcIj5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMEI5ZVhlTGZNX1V2RlNteHVha3BpYXpGRWVFMC92aWV3XCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtZmlsZS10ZXh0XCI+PC9pPjwvYT5cbiAgICAgIDwvbGk+XG4gICAgICA8bGkgY2xhc3NOYW1lPVwibWVkaWEtaWNvbnNcIj5cbiAgICAgICAgPGEgaHJlZj1cIm1haWx0bzp0aW1tLmNoaW5AZ21haWwuY29tXCIgdGFyZ2V0PVwiX3RvcFwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWVudmVsb3BlXCI+PC9pPjwvYT5cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgPC9kaXY+XG4gIDwvbmF2PlxuKTsgXG5cbndpbmRvdy5OYXYgPSBOYXY7Il19