let data3 = [
  {
    id: '1',
    data: {
      label: {
        key: null,
        ref: null,
        props: {
          id: '1',
          backgroundColor: 'white',
          title: 'A1',
          tagBackgroundColor: '#D8E0FF',
          tagColor: '#1E48B5',
          tagName: 'Input',
          image:
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTIiIGhlaWdodD0iNTIiIHZpZXdCb3g9IjAgMCA1MiA1MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjUyIiBoZWlnaHQ9IjUyIiByeD0iNCIgZmlsbD0iI0YwRjdGRSIvPgo8cGF0aCBkPSJNMjkuNzUgMTcuMjVIMzIuMjVDMzIuOTEzMSAxNy4yNSAzMy41NDkgMTcuNTEzNCAzNC4wMTc4IDE3Ljk4MjJDMzQuNDg2NiAxOC40NTExIDM0Ljc1IDE5LjA4NyAzNC43NSAxOS43NVYyOS45NjI1QzM1LjU4NDQgMzAuMjU3NCAzNi4yODc3IDMwLjgzNzcgMzYuNzM1NSAzMS42MDFDMzcuMTgzMyAzMi4zNjQzIDM3LjM0NjkgMzMuMjYxMyAzNy4xOTczIDM0LjEzMzVDMzcuMDQ3NyAzNS4wMDU3IDM2LjU5NDYgMzUuNzk2OSAzNS45MTggMzYuMzY3M0MzNS4yNDE0IDM2LjkzNzggMzQuMzg1IDM3LjI1MDYgMzMuNSAzNy4yNTA2QzMyLjYxNTEgMzcuMjUwNiAzMS43NTg2IDM2LjkzNzggMzEuMDgyMSAzNi4zNjczQzMwLjQwNTUgMzUuNzk2OSAyOS45NTI0IDM1LjAwNTcgMjkuODAyOCAzNC4xMzM1QzI5LjY1MzIgMzMuMjYxMyAyOS44MTY4IDMyLjM2NDMgMzAuMjY0NiAzMS42MDFDMzAuNzEyNCAzMC44Mzc3IDMxLjQxNTcgMzAuMjU3NCAzMi4yNSAyOS45NjI1VjE5Ljc1SDI5Ljc1VjIzLjVMMjQuMTI1IDE4LjVMMjkuNzUgMTMuNVYxNy4yNVpNMTcuMjUgMjIuMDM3NUMxNi40MTU3IDIxLjc0MjYgMTUuNzEyNCAyMS4xNjIzIDE1LjI2NDYgMjAuMzk5QzE0LjgxNjggMTkuNjM1NyAxNC42NTMyIDE4LjczODcgMTQuODAyOCAxNy44NjY1QzE0Ljk1MjQgMTYuOTk0MyAxNS40MDU1IDE2LjIwMzEgMTYuMDgyMSAxNS42MzI3QzE2Ljc1ODYgMTUuMDYyMiAxNy42MTUxIDE0Ljc0OTQgMTguNSAxNC43NDk0QzE5LjM4NSAxNC43NDk0IDIwLjI0MTQgMTUuMDYyMiAyMC45MTggMTUuNjMyN0MyMS41OTQ2IDE2LjIwMzEgMjIuMDQ3NyAxNi45OTQzIDIyLjE5NzMgMTcuODY2NUMyMi4zNDY5IDE4LjczODcgMjIuMTgzMyAxOS42MzU3IDIxLjczNTUgMjAuMzk5QzIxLjI4NzcgMjEuMTYyMyAyMC41ODQ0IDIxLjc0MjYgMTkuNzUgMjIuMDM3NVYyOS45NjI1QzIwLjU4NDQgMzAuMjU3NCAyMS4yODc3IDMwLjgzNzcgMjEuNzM1NSAzMS42MDFDMjIuMTgzMyAzMi4zNjQzIDIyLjM0NjkgMzMuMjYxMyAyMi4xOTczIDM0LjEzMzVDMjIuMDQ3NyAzNS4wMDU3IDIxLjU5NDYgMzUuNzk2OSAyMC45MTggMzYuMzY3M0MyMC4yNDE0IDM2LjkzNzggMTkuMzg1IDM3LjI1MDYgMTguNSAzNy4yNTA2QzE3LjYxNTEgMzcuMjUwNiAxNi43NTg2IDM2LjkzNzggMTYuMDgyMSAzNi4zNjczQzE1LjQwNTUgMzUuNzk2OSAxNC45NTI0IDM1LjAwNTcgMTQuODAyOCAzNC4xMzM1QzE0LjY1MzIgMzMuMjYxMyAxNC44MTY4IDMyLjM2NDMgMTUuMjY0NiAzMS42MDFDMTUuNzEyNCAzMC44Mzc3IDE2LjQxNTcgMzAuMjU3NCAxNy4yNSAyOS45NjI1VjIyLjAzNzVaTTE4LjUgMTkuNzVDMTguODMxNiAxOS43NSAxOS4xNDk1IDE5LjYxODMgMTkuMzgzOSAxOS4zODM5QzE5LjYxODMgMTkuMTQ5NSAxOS43NSAxOC44MzE1IDE5Ljc1IDE4LjVDMTkuNzUgMTguMTY4NSAxOS42MTgzIDE3Ljg1MDUgMTkuMzgzOSAxNy42MTYxQzE5LjE0OTUgMTcuMzgxNyAxOC44MzE2IDE3LjI1IDE4LjUgMTcuMjVDMTguMTY4NSAxNy4yNSAxNy44NTA2IDE3LjM4MTcgMTcuNjE2MiAxNy42MTYxQzE3LjM4MTcgMTcuODUwNSAxNy4yNSAxOC4xNjg1IDE3LjI1IDE4LjVDMTcuMjUgMTguODMxNSAxNy4zODE3IDE5LjE0OTUgMTcuNjE2MiAxOS4zODM5QzE3Ljg1MDYgMTkuNjE4MyAxOC4xNjg1IDE5Ljc1IDE4LjUgMTkuNzVaTTE4LjUgMzQuNzVDMTguODMxNiAzNC43NSAxOS4xNDk1IDM0LjYxODMgMTkuMzgzOSAzNC4zODM5QzE5LjYxODMgMzQuMTQ5NSAxOS43NSAzMy44MzE1IDE5Ljc1IDMzLjVDMTkuNzUgMzMuMTY4NSAxOS42MTgzIDMyLjg1MDUgMTkuMzgzOSAzMi42MTYxQzE5LjE0OTUgMzIuMzgxNyAxOC44MzE2IDMyLjI1IDE4LjUgMzIuMjVDMTguMTY4NSAzMi4yNSAxNy44NTA2IDMyLjM4MTcgMTcuNjE2MiAzMi42MTYxQzE3LjM4MTcgMzIuODUwNSAxNy4yNSAzMy4xNjg1IDE3LjI1IDMzLjVDMTcuMjUgMzMuODMxNSAxNy4zODE3IDM0LjE0OTUgMTcuNjE2MiAzNC4zODM5QzE3Ljg1MDYgMzQuNjE4MyAxOC4xNjg1IDM0Ljc1IDE4LjUgMzQuNzVaTTMzLjUgMzQuNzVDMzMuODMxNiAzNC43NSAzNC4xNDk1IDM0LjYxODMgMzQuMzgzOSAzNC4zODM5QzM0LjYxODMgMzQuMTQ5NSAzNC43NSAzMy44MzE1IDM0Ljc1IDMzLjVDMzQuNzUgMzMuMTY4NSAzNC42MTgzIDMyLjg1MDUgMzQuMzgzOSAzMi42MTYxQzM0LjE0OTUgMzIuMzgxNyAzMy44MzE2IDMyLjI1IDMzLjUgMzIuMjVDMzMuMTY4NSAzMi4yNSAzMi44NTA2IDMyLjM4MTcgMzIuNjE2MiAzMi42MTYxQzMyLjM4MTcgMzIuODUwNSAzMi4yNSAzMy4xNjg1IDMyLjI1IDMzLjVDMzIuMjUgMzMuODMxNSAzMi4zODE3IDM0LjE0OTUgMzIuNjE2MiAzNC4zODM5QzMyLjg1MDYgMzQuNjE4MyAzMy4xNjg1IDM0Ljc1IDMzLjUgMzQuNzVaIiBmaWxsPSIjNDU5RkYyIi8+Cjwvc3ZnPgo=',
        },
        _owner: null,
        _store: {},
      },
    },
    position: { x: 30, y: 100 },
    sourcePosition: 'right',
    type: 'input',
  },
  {
    id: '2',
    data: {
      label: {
        key: null,
        ref: null,
        props: {
          id: '2',
          backgroundColor: 'white',
          title: 'A2',
          tagBackgroundColor: '#CEEFE1',
          tagColor: '#169560',
          tagName: 'Transform',
          image:
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTIiIGhlaWdodD0iNTIiIHZpZXdCb3g9IjAgMCA1MiA1MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjUyIiBoZWlnaHQ9IjUyIiByeD0iNCIgZmlsbD0iI0YwRjdGRSIvPgo8cGF0aCBkPSJNMjkuNzUgMTcuMjVIMzIuMjVDMzIuOTEzMSAxNy4yNSAzMy41NDkgMTcuNTEzNCAzNC4wMTc4IDE3Ljk4MjJDMzQuNDg2NiAxOC40NTExIDM0Ljc1IDE5LjA4NyAzNC43NSAxOS43NVYyOS45NjI1QzM1LjU4NDQgMzAuMjU3NCAzNi4yODc3IDMwLjgzNzcgMzYuNzM1NSAzMS42MDFDMzcuMTgzMyAzMi4zNjQzIDM3LjM0NjkgMzMuMjYxMyAzNy4xOTczIDM0LjEzMzVDMzcuMDQ3NyAzNS4wMDU3IDM2LjU5NDYgMzUuNzk2OSAzNS45MTggMzYuMzY3M0MzNS4yNDE0IDM2LjkzNzggMzQuMzg1IDM3LjI1MDYgMzMuNSAzNy4yNTA2QzMyLjYxNTEgMzcuMjUwNiAzMS43NTg2IDM2LjkzNzggMzEuMDgyMSAzNi4zNjczQzMwLjQwNTUgMzUuNzk2OSAyOS45NTI0IDM1LjAwNTcgMjkuODAyOCAzNC4xMzM1QzI5LjY1MzIgMzMuMjYxMyAyOS44MTY4IDMyLjM2NDMgMzAuMjY0NiAzMS42MDFDMzAuNzEyNCAzMC44Mzc3IDMxLjQxNTcgMzAuMjU3NCAzMi4yNSAyOS45NjI1VjE5Ljc1SDI5Ljc1VjIzLjVMMjQuMTI1IDE4LjVMMjkuNzUgMTMuNVYxNy4yNVpNMTcuMjUgMjIuMDM3NUMxNi40MTU3IDIxLjc0MjYgMTUuNzEyNCAyMS4xNjIzIDE1LjI2NDYgMjAuMzk5QzE0LjgxNjggMTkuNjM1NyAxNC42NTMyIDE4LjczODcgMTQuODAyOCAxNy44NjY1QzE0Ljk1MjQgMTYuOTk0MyAxNS40MDU1IDE2LjIwMzEgMTYuMDgyMSAxNS42MzI3QzE2Ljc1ODYgMTUuMDYyMiAxNy42MTUxIDE0Ljc0OTQgMTguNSAxNC43NDk0QzE5LjM4NSAxNC43NDk0IDIwLjI0MTQgMTUuMDYyMiAyMC45MTggMTUuNjMyN0MyMS41OTQ2IDE2LjIwMzEgMjIuMDQ3NyAxNi45OTQzIDIyLjE5NzMgMTcuODY2NUMyMi4zNDY5IDE4LjczODcgMjIuMTgzMyAxOS42MzU3IDIxLjczNTUgMjAuMzk5QzIxLjI4NzcgMjEuMTYyMyAyMC41ODQ0IDIxLjc0MjYgMTkuNzUgMjIuMDM3NVYyOS45NjI1QzIwLjU4NDQgMzAuMjU3NCAyMS4yODc3IDMwLjgzNzcgMjEuNzM1NSAzMS42MDFDMjIuMTgzMyAzMi4zNjQzIDIyLjM0NjkgMzMuMjYxMyAyMi4xOTczIDM0LjEzMzVDMjIuMDQ3NyAzNS4wMDU3IDIxLjU5NDYgMzUuNzk2OSAyMC45MTggMzYuMzY3M0MyMC4yNDE0IDM2LjkzNzggMTkuMzg1IDM3LjI1MDYgMTguNSAzNy4yNTA2QzE3LjYxNTEgMzcuMjUwNiAxNi43NTg2IDM2LjkzNzggMTYuMDgyMSAzNi4zNjczQzE1LjQwNTUgMzUuNzk2OSAxNC45NTI0IDM1LjAwNTcgMTQuODAyOCAzNC4xMzM1QzE0LjY1MzIgMzMuMjYxMyAxNC44MTY4IDMyLjM2NDMgMTUuMjY0NiAzMS42MDFDMTUuNzEyNCAzMC44Mzc3IDE2LjQxNTcgMzAuMjU3NCAxNy4yNSAyOS45NjI1VjIyLjAzNzVaTTE4LjUgMTkuNzVDMTguODMxNiAxOS43NSAxOS4xNDk1IDE5LjYxODMgMTkuMzgzOSAxOS4zODM5QzE5LjYxODMgMTkuMTQ5NSAxOS43NSAxOC44MzE1IDE5Ljc1IDE4LjVDMTkuNzUgMTguMTY4NSAxOS42MTgzIDE3Ljg1MDUgMTkuMzgzOSAxNy42MTYxQzE5LjE0OTUgMTcuMzgxNyAxOC44MzE2IDE3LjI1IDE4LjUgMTcuMjVDMTguMTY4NSAxNy4yNSAxNy44NTA2IDE3LjM4MTcgMTcuNjE2MiAxNy42MTYxQzE3LjM4MTcgMTcuODUwNSAxNy4yNSAxOC4xNjg1IDE3LjI1IDE4LjVDMTcuMjUgMTguODMxNSAxNy4zODE3IDE5LjE0OTUgMTcuNjE2MiAxOS4zODM5QzE3Ljg1MDYgMTkuNjE4MyAxOC4xNjg1IDE5Ljc1IDE4LjUgMTkuNzVaTTE4LjUgMzQuNzVDMTguODMxNiAzNC43NSAxOS4xNDk1IDM0LjYxODMgMTkuMzgzOSAzNC4zODM5QzE5LjYxODMgMzQuMTQ5NSAxOS43NSAzMy44MzE1IDE5Ljc1IDMzLjVDMTkuNzUgMzMuMTY4NSAxOS42MTgzIDMyLjg1MDUgMTkuMzgzOSAzMi42MTYxQzE5LjE0OTUgMzIuMzgxNyAxOC44MzE2IDMyLjI1IDE4LjUgMzIuMjVDMTguMTY4NSAzMi4yNSAxNy44NTA2IDMyLjM4MTcgMTcuNjE2MiAzMi42MTYxQzE3LjM4MTcgMzIuODUwNSAxNy4yNSAzMy4xNjg1IDE3LjI1IDMzLjVDMTcuMjUgMzMuODMxNSAxNy4zODE3IDM0LjE0OTUgMTcuNjE2MiAzNC4zODM5QzE3Ljg1MDYgMzQuNjE4MyAxOC4xNjg1IDM0Ljc1IDE4LjUgMzQuNzVaTTMzLjUgMzQuNzVDMzMuODMxNiAzNC43NSAzNC4xNDk1IDM0LjYxODMgMzQuMzgzOSAzNC4zODM5QzM0LjYxODMgMzQuMTQ5NSAzNC43NSAzMy44MzE1IDM0Ljc1IDMzLjVDMzQuNzUgMzMuMTY4NSAzNC42MTgzIDMyLjg1MDUgMzQuMzgzOSAzMi42MTYxQzM0LjE0OTUgMzIuMzgxNyAzMy44MzE2IDMyLjI1IDMzLjUgMzIuMjVDMzMuMTY4NSAzMi4yNSAzMi44NTA2IDMyLjM4MTcgMzIuNjE2MiAzMi42MTYxQzMyLjM4MTcgMzIuODUwNSAzMi4yNSAzMy4xNjg1IDMyLjI1IDMzLjVDMzIuMjUgMzMuODMxNSAzMi4zODE3IDM0LjE0OTUgMzIuNjE2MiAzNC4zODM5QzMyLjg1MDYgMzQuNjE4MyAzMy4xNjg1IDM0Ljc1IDMzLjUgMzQuNzVaIiBmaWxsPSIjNDU5RkYyIi8+Cjwvc3ZnPgo=',
        },
        _owner: null,
        _store: {},
      },
    },
    position: { x: 270, y: 40 },
  },
  {
    id: '3',
    data: {
      label: {
        key: null,
        ref: null,
        props: {
          id: '3',
          backgroundColor: 'white',
          title: 'A3',
          tagBackgroundColor: '#FFE7FE',
          tagColor: '#CF6ACB',
          tagName: 'Store',
          image:
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTIiIGhlaWdodD0iNTIiIHZpZXdCb3g9IjAgMCA1MiA1MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjUyIiBoZWlnaHQ9IjUyIiByeD0iNCIgZmlsbD0iI0YwRjdGRSIvPgo8cGF0aCBkPSJNMjkuNzUgMTcuMjVIMzIuMjVDMzIuOTEzMSAxNy4yNSAzMy41NDkgMTcuNTEzNCAzNC4wMTc4IDE3Ljk4MjJDMzQuNDg2NiAxOC40NTExIDM0Ljc1IDE5LjA4NyAzNC43NSAxOS43NVYyOS45NjI1QzM1LjU4NDQgMzAuMjU3NCAzNi4yODc3IDMwLjgzNzcgMzYuNzM1NSAzMS42MDFDMzcuMTgzMyAzMi4zNjQzIDM3LjM0NjkgMzMuMjYxMyAzNy4xOTczIDM0LjEzMzVDMzcuMDQ3NyAzNS4wMDU3IDM2LjU5NDYgMzUuNzk2OSAzNS45MTggMzYuMzY3M0MzNS4yNDE0IDM2LjkzNzggMzQuMzg1IDM3LjI1MDYgMzMuNSAzNy4yNTA2QzMyLjYxNTEgMzcuMjUwNiAzMS43NTg2IDM2LjkzNzggMzEuMDgyMSAzNi4zNjczQzMwLjQwNTUgMzUuNzk2OSAyOS45NTI0IDM1LjAwNTcgMjkuODAyOCAzNC4xMzM1QzI5LjY1MzIgMzMuMjYxMyAyOS44MTY4IDMyLjM2NDMgMzAuMjY0NiAzMS42MDFDMzAuNzEyNCAzMC44Mzc3IDMxLjQxNTcgMzAuMjU3NCAzMi4yNSAyOS45NjI1VjE5Ljc1SDI5Ljc1VjIzLjVMMjQuMTI1IDE4LjVMMjkuNzUgMTMuNVYxNy4yNVpNMTcuMjUgMjIuMDM3NUMxNi40MTU3IDIxLjc0MjYgMTUuNzEyNCAyMS4xNjIzIDE1LjI2NDYgMjAuMzk5QzE0LjgxNjggMTkuNjM1NyAxNC42NTMyIDE4LjczODcgMTQuODAyOCAxNy44NjY1QzE0Ljk1MjQgMTYuOTk0MyAxNS40MDU1IDE2LjIwMzEgMTYuMDgyMSAxNS42MzI3QzE2Ljc1ODYgMTUuMDYyMiAxNy42MTUxIDE0Ljc0OTQgMTguNSAxNC43NDk0QzE5LjM4NSAxNC43NDk0IDIwLjI0MTQgMTUuMDYyMiAyMC45MTggMTUuNjMyN0MyMS41OTQ2IDE2LjIwMzEgMjIuMDQ3NyAxNi45OTQzIDIyLjE5NzMgMTcuODY2NUMyMi4zNDY5IDE4LjczODcgMjIuMTgzMyAxOS42MzU3IDIxLjczNTUgMjAuMzk5QzIxLjI4NzcgMjEuMTYyMyAyMC41ODQ0IDIxLjc0MjYgMTkuNzUgMjIuMDM3NVYyOS45NjI1QzIwLjU4NDQgMzAuMjU3NCAyMS4yODc3IDMwLjgzNzcgMjEuNzM1NSAzMS42MDFDMjIuMTgzMyAzMi4zNjQzIDIyLjM0NjkgMzMuMjYxMyAyMi4xOTczIDM0LjEzMzVDMjIuMDQ3NyAzNS4wMDU3IDIxLjU5NDYgMzUuNzk2OSAyMC45MTggMzYuMzY3M0MyMC4yNDE0IDM2LjkzNzggMTkuMzg1IDM3LjI1MDYgMTguNSAzNy4yNTA2QzE3LjYxNTEgMzcuMjUwNiAxNi43NTg2IDM2LjkzNzggMTYuMDgyMSAzNi4zNjczQzE1LjQwNTUgMzUuNzk2OSAxNC45NTI0IDM1LjAwNTcgMTQuODAyOCAzNC4xMzM1QzE0LjY1MzIgMzMuMjYxMyAxNC44MTY4IDMyLjM2NDMgMTUuMjY0NiAzMS42MDFDMTUuNzEyNCAzMC44Mzc3IDE2LjQxNTcgMzAuMjU3NCAxNy4yNSAyOS45NjI1VjIyLjAzNzVaTTE4LjUgMTkuNzVDMTguODMxNiAxOS43NSAxOS4xNDk1IDE5LjYxODMgMTkuMzgzOSAxOS4zODM5QzE5LjYxODMgMTkuMTQ5NSAxOS43NSAxOC44MzE1IDE5Ljc1IDE4LjVDMTkuNzUgMTguMTY4NSAxOS42MTgzIDE3Ljg1MDUgMTkuMzgzOSAxNy42MTYxQzE5LjE0OTUgMTcuMzgxNyAxOC44MzE2IDE3LjI1IDE4LjUgMTcuMjVDMTguMTY4NSAxNy4yNSAxNy44NTA2IDE3LjM4MTcgMTcuNjE2MiAxNy42MTYxQzE3LjM4MTcgMTcuODUwNSAxNy4yNSAxOC4xNjg1IDE3LjI1IDE4LjVDMTcuMjUgMTguODMxNSAxNy4zODE3IDE5LjE0OTUgMTcuNjE2MiAxOS4zODM5QzE3Ljg1MDYgMTkuNjE4MyAxOC4xNjg1IDE5Ljc1IDE4LjUgMTkuNzVaTTE4LjUgMzQuNzVDMTguODMxNiAzNC43NSAxOS4xNDk1IDM0LjYxODMgMTkuMzgzOSAzNC4zODM5QzE5LjYxODMgMzQuMTQ5NSAxOS43NSAzMy44MzE1IDE5Ljc1IDMzLjVDMTkuNzUgMzMuMTY4NSAxOS42MTgzIDMyLjg1MDUgMTkuMzgzOSAzMi42MTYxQzE5LjE0OTUgMzIuMzgxNyAxOC44MzE2IDMyLjI1IDE4LjUgMzIuMjVDMTguMTY4NSAzMi4yNSAxNy44NTA2IDMyLjM4MTcgMTcuNjE2MiAzMi42MTYxQzE3LjM4MTcgMzIuODUwNSAxNy4yNSAzMy4xNjg1IDE3LjI1IDMzLjVDMTcuMjUgMzMuODMxNSAxNy4zODE3IDM0LjE0OTUgMTcuNjE2MiAzNC4zODM5QzE3Ljg1MDYgMzQuNjE4MyAxOC4xNjg1IDM0Ljc1IDE4LjUgMzQuNzVaTTMzLjUgMzQuNzVDMzMuODMxNiAzNC43NSAzNC4xNDk1IDM0LjYxODMgMzQuMzgzOSAzNC4zODM5QzM0LjYxODMgMzQuMTQ5NSAzNC43NSAzMy44MzE1IDM0Ljc1IDMzLjVDMzQuNzUgMzMuMTY4NSAzNC42MTgzIDMyLjg1MDUgMzQuMzgzOSAzMi42MTYxQzM0LjE0OTUgMzIuMzgxNyAzMy44MzE2IDMyLjI1IDMzLjUgMzIuMjVDMzMuMTY4NSAzMi4yNSAzMi44NTA2IDMyLjM4MTcgMzIuNjE2MiAzMi42MTYxQzMyLjM4MTcgMzIuODUwNSAzMi4yNSAzMy4xNjg1IDMyLjI1IDMzLjVDMzIuMjUgMzMuODMxNSAzMi4zODE3IDM0LjE0OTUgMzIuNjE2MiAzNC4zODM5QzMyLjg1MDYgMzQuNjE4MyAzMy4xNjg1IDM0Ljc1IDMzLjUgMzQuNzVaIiBmaWxsPSIjNDU5RkYyIi8+Cjwvc3ZnPgo=',
        },
        _owner: null,
        _store: {},
      },
    },
    position: { x: 550, y: 50 },
    type: 'output',
    targetPosition: 'left',
  },
  {
    id: '4',
    data: {
      label: {
        key: null,
        ref: null,
        props: {
          id: '4',
          backgroundColor: 'white',
          title: 'A4',
          tagBackgroundColor: '#CEEFE1',
          tagColor: '#169560',
          tagName: 'Transform',
          image:
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTIiIGhlaWdodD0iNTIiIHZpZXdCb3g9IjAgMCA1MiA1MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjUyIiBoZWlnaHQ9IjUyIiByeD0iNCIgZmlsbD0iI0YwRjdGRSIvPgo8cGF0aCBkPSJNMjkuNzUgMTcuMjVIMzIuMjVDMzIuOTEzMSAxNy4yNSAzMy41NDkgMTcuNTEzNCAzNC4wMTc4IDE3Ljk4MjJDMzQuNDg2NiAxOC40NTExIDM0Ljc1IDE5LjA4NyAzNC43NSAxOS43NVYyOS45NjI1QzM1LjU4NDQgMzAuMjU3NCAzNi4yODc3IDMwLjgzNzcgMzYuNzM1NSAzMS42MDFDMzcuMTgzMyAzMi4zNjQzIDM3LjM0NjkgMzMuMjYxMyAzNy4xOTczIDM0LjEzMzVDMzcuMDQ3NyAzNS4wMDU3IDM2LjU5NDYgMzUuNzk2OSAzNS45MTggMzYuMzY3M0MzNS4yNDE0IDM2LjkzNzggMzQuMzg1IDM3LjI1MDYgMzMuNSAzNy4yNTA2QzMyLjYxNTEgMzcuMjUwNiAzMS43NTg2IDM2LjkzNzggMzEuMDgyMSAzNi4zNjczQzMwLjQwNTUgMzUuNzk2OSAyOS45NTI0IDM1LjAwNTcgMjkuODAyOCAzNC4xMzM1QzI5LjY1MzIgMzMuMjYxMyAyOS44MTY4IDMyLjM2NDMgMzAuMjY0NiAzMS42MDFDMzAuNzEyNCAzMC44Mzc3IDMxLjQxNTcgMzAuMjU3NCAzMi4yNSAyOS45NjI1VjE5Ljc1SDI5Ljc1VjIzLjVMMjQuMTI1IDE4LjVMMjkuNzUgMTMuNVYxNy4yNVpNMTcuMjUgMjIuMDM3NUMxNi40MTU3IDIxLjc0MjYgMTUuNzEyNCAyMS4xNjIzIDE1LjI2NDYgMjAuMzk5QzE0LjgxNjggMTkuNjM1NyAxNC42NTMyIDE4LjczODcgMTQuODAyOCAxNy44NjY1QzE0Ljk1MjQgMTYuOTk0MyAxNS40MDU1IDE2LjIwMzEgMTYuMDgyMSAxNS42MzI3QzE2Ljc1ODYgMTUuMDYyMiAxNy42MTUxIDE0Ljc0OTQgMTguNSAxNC43NDk0QzE5LjM4NSAxNC43NDk0IDIwLjI0MTQgMTUuMDYyMiAyMC45MTggMTUuNjMyN0MyMS41OTQ2IDE2LjIwMzEgMjIuMDQ3NyAxNi45OTQzIDIyLjE5NzMgMTcuODY2NUMyMi4zNDY5IDE4LjczODcgMjIuMTgzMyAxOS42MzU3IDIxLjczNTUgMjAuMzk5QzIxLjI4NzcgMjEuMTYyMyAyMC41ODQ0IDIxLjc0MjYgMTkuNzUgMjIuMDM3NVYyOS45NjI1QzIwLjU4NDQgMzAuMjU3NCAyMS4yODc3IDMwLjgzNzcgMjEuNzM1NSAzMS42MDFDMjIuMTgzMyAzMi4zNjQzIDIyLjM0NjkgMzMuMjYxMyAyMi4xOTczIDM0LjEzMzVDMjIuMDQ3NyAzNS4wMDU3IDIxLjU5NDYgMzUuNzk2OSAyMC45MTggMzYuMzY3M0MyMC4yNDE0IDM2LjkzNzggMTkuMzg1IDM3LjI1MDYgMTguNSAzNy4yNTA2QzE3LjYxNTEgMzcuMjUwNiAxNi43NTg2IDM2LjkzNzggMTYuMDgyMSAzNi4zNjczQzE1LjQwNTUgMzUuNzk2OSAxNC45NTI0IDM1LjAwNTcgMTQuODAyOCAzNC4xMzM1QzE0LjY1MzIgMzMuMjYxMyAxNC44MTY4IDMyLjM2NDMgMTUuMjY0NiAzMS42MDFDMTUuNzEyNCAzMC44Mzc3IDE2LjQxNTcgMzAuMjU3NCAxNy4yNSAyOS45NjI1VjIyLjAzNzVaTTE4LjUgMTkuNzVDMTguODMxNiAxOS43NSAxOS4xNDk1IDE5LjYxODMgMTkuMzgzOSAxOS4zODM5QzE5LjYxODMgMTkuMTQ5NSAxOS43NSAxOC44MzE1IDE5Ljc1IDE4LjVDMTkuNzUgMTguMTY4NSAxOS42MTgzIDE3Ljg1MDUgMTkuMzgzOSAxNy42MTYxQzE5LjE0OTUgMTcuMzgxNyAxOC44MzE2IDE3LjI1IDE4LjUgMTcuMjVDMTguMTY4NSAxNy4yNSAxNy44NTA2IDE3LjM4MTcgMTcuNjE2MiAxNy42MTYxQzE3LjM4MTcgMTcuODUwNSAxNy4yNSAxOC4xNjg1IDE3LjI1IDE4LjVDMTcuMjUgMTguODMxNSAxNy4zODE3IDE5LjE0OTUgMTcuNjE2MiAxOS4zODM5QzE3Ljg1MDYgMTkuNjE4MyAxOC4xNjg1IDE5Ljc1IDE4LjUgMTkuNzVaTTE4LjUgMzQuNzVDMTguODMxNiAzNC43NSAxOS4xNDk1IDM0LjYxODMgMTkuMzgzOSAzNC4zODM5QzE5LjYxODMgMzQuMTQ5NSAxOS43NSAzMy44MzE1IDE5Ljc1IDMzLjVDMTkuNzUgMzMuMTY4NSAxOS42MTgzIDMyLjg1MDUgMTkuMzgzOSAzMi42MTYxQzE5LjE0OTUgMzIuMzgxNyAxOC44MzE2IDMyLjI1IDE4LjUgMzIuMjVDMTguMTY4NSAzMi4yNSAxNy44NTA2IDMyLjM4MTcgMTcuNjE2MiAzMi42MTYxQzE3LjM4MTcgMzIuODUwNSAxNy4yNSAzMy4xNjg1IDE3LjI1IDMzLjVDMTcuMjUgMzMuODMxNSAxNy4zODE3IDM0LjE0OTUgMTcuNjE2MiAzNC4zODM5QzE3Ljg1MDYgMzQuNjE4MyAxOC4xNjg1IDM0Ljc1IDE4LjUgMzQuNzVaTTMzLjUgMzQuNzVDMzMuODMxNiAzNC43NSAzNC4xNDk1IDM0LjYxODMgMzQuMzgzOSAzNC4zODM5QzM0LjYxODMgMzQuMTQ5NSAzNC43NSAzMy44MzE1IDM0Ljc1IDMzLjVDMzQuNzUgMzMuMTY4NSAzNC42MTgzIDMyLjg1MDUgMzQuMzgzOSAzMi42MTYxQzM0LjE0OTUgMzIuMzgxNyAzMy44MzE2IDMyLjI1IDMzLjUgMzIuMjVDMzMuMTY4NSAzMi4yNSAzMi44NTA2IDMyLjM4MTcgMzIuNjE2MiAzMi42MTYxQzMyLjM4MTcgMzIuODUwNSAzMi4yNSAzMy4xNjg1IDMyLjI1IDMzLjVDMzIuMjUgMzMuODMxNSAzMi4zODE3IDM0LjE0OTUgMzIuNjE2MiAzNC4zODM5QzMyLjg1MDYgMzQuNjE4MyAzMy4xNjg1IDM0Ljc1IDMzLjUgMzQuNzVaIiBmaWxsPSIjNDU5RkYyIi8+Cjwvc3ZnPgo=',
        },
        _owner: null,
        _store: {},
      },
    },
    position: { x: 300, y: 300 },
  },
  {
    id: '5',
    data: {
      label: {
        key: null,
        ref: null,
        props: {
          id: '5',
          backgroundColor: 'white',
          title: 'A5',
          tagBackgroundColor: '#CEEFE1',
          tagColor: '#169560',
          tagName: 'Transform',
          image:
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTIiIGhlaWdodD0iNTIiIHZpZXdCb3g9IjAgMCA1MiA1MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjUyIiBoZWlnaHQ9IjUyIiByeD0iNCIgZmlsbD0iI0YwRjdGRSIvPgo8cGF0aCBkPSJNMjkuNzUgMTcuMjVIMzIuMjVDMzIuOTEzMSAxNy4yNSAzMy41NDkgMTcuNTEzNCAzNC4wMTc4IDE3Ljk4MjJDMzQuNDg2NiAxOC40NTExIDM0Ljc1IDE5LjA4NyAzNC43NSAxOS43NVYyOS45NjI1QzM1LjU4NDQgMzAuMjU3NCAzNi4yODc3IDMwLjgzNzcgMzYuNzM1NSAzMS42MDFDMzcuMTgzMyAzMi4zNjQzIDM3LjM0NjkgMzMuMjYxMyAzNy4xOTczIDM0LjEzMzVDMzcuMDQ3NyAzNS4wMDU3IDM2LjU5NDYgMzUuNzk2OSAzNS45MTggMzYuMzY3M0MzNS4yNDE0IDM2LjkzNzggMzQuMzg1IDM3LjI1MDYgMzMuNSAzNy4yNTA2QzMyLjYxNTEgMzcuMjUwNiAzMS43NTg2IDM2LjkzNzggMzEuMDgyMSAzNi4zNjczQzMwLjQwNTUgMzUuNzk2OSAyOS45NTI0IDM1LjAwNTcgMjkuODAyOCAzNC4xMzM1QzI5LjY1MzIgMzMuMjYxMyAyOS44MTY4IDMyLjM2NDMgMzAuMjY0NiAzMS42MDFDMzAuNzEyNCAzMC44Mzc3IDMxLjQxNTcgMzAuMjU3NCAzMi4yNSAyOS45NjI1VjE5Ljc1SDI5Ljc1VjIzLjVMMjQuMTI1IDE4LjVMMjkuNzUgMTMuNVYxNy4yNVpNMTcuMjUgMjIuMDM3NUMxNi40MTU3IDIxLjc0MjYgMTUuNzEyNCAyMS4xNjIzIDE1LjI2NDYgMjAuMzk5QzE0LjgxNjggMTkuNjM1NyAxNC42NTMyIDE4LjczODcgMTQuODAyOCAxNy44NjY1QzE0Ljk1MjQgMTYuOTk0MyAxNS40MDU1IDE2LjIwMzEgMTYuMDgyMSAxNS42MzI3QzE2Ljc1ODYgMTUuMDYyMiAxNy42MTUxIDE0Ljc0OTQgMTguNSAxNC43NDk0QzE5LjM4NSAxNC43NDk0IDIwLjI0MTQgMTUuMDYyMiAyMC45MTggMTUuNjMyN0MyMS41OTQ2IDE2LjIwMzEgMjIuMDQ3NyAxNi45OTQzIDIyLjE5NzMgMTcuODY2NUMyMi4zNDY5IDE4LjczODcgMjIuMTgzMyAxOS42MzU3IDIxLjczNTUgMjAuMzk5QzIxLjI4NzcgMjEuMTYyMyAyMC41ODQ0IDIxLjc0MjYgMTkuNzUgMjIuMDM3NVYyOS45NjI1QzIwLjU4NDQgMzAuMjU3NCAyMS4yODc3IDMwLjgzNzcgMjEuNzM1NSAzMS42MDFDMjIuMTgzMyAzMi4zNjQzIDIyLjM0NjkgMzMuMjYxMyAyMi4xOTczIDM0LjEzMzVDMjIuMDQ3NyAzNS4wMDU3IDIxLjU5NDYgMzUuNzk2OSAyMC45MTggMzYuMzY3M0MyMC4yNDE0IDM2LjkzNzggMTkuMzg1IDM3LjI1MDYgMTguNSAzNy4yNTA2QzE3LjYxNTEgMzcuMjUwNiAxNi43NTg2IDM2LjkzNzggMTYuMDgyMSAzNi4zNjczQzE1LjQwNTUgMzUuNzk2OSAxNC45NTI0IDM1LjAwNTcgMTQuODAyOCAzNC4xMzM1QzE0LjY1MzIgMzMuMjYxMyAxNC44MTY4IDMyLjM2NDMgMTUuMjY0NiAzMS42MDFDMTUuNzEyNCAzMC44Mzc3IDE2LjQxNTcgMzAuMjU3NCAxNy4yNSAyOS45NjI1VjIyLjAzNzVaTTE4LjUgMTkuNzVDMTguODMxNiAxOS43NSAxOS4xNDk1IDE5LjYxODMgMTkuMzgzOSAxOS4zODM5QzE5LjYxODMgMTkuMTQ5NSAxOS43NSAxOC44MzE1IDE5Ljc1IDE4LjVDMTkuNzUgMTguMTY4NSAxOS42MTgzIDE3Ljg1MDUgMTkuMzgzOSAxNy42MTYxQzE5LjE0OTUgMTcuMzgxNyAxOC44MzE2IDE3LjI1IDE4LjUgMTcuMjVDMTguMTY4NSAxNy4yNSAxNy44NTA2IDE3LjM4MTcgMTcuNjE2MiAxNy42MTYxQzE3LjM4MTcgMTcuODUwNSAxNy4yNSAxOC4xNjg1IDE3LjI1IDE4LjVDMTcuMjUgMTguODMxNSAxNy4zODE3IDE5LjE0OTUgMTcuNjE2MiAxOS4zODM5QzE3Ljg1MDYgMTkuNjE4MyAxOC4xNjg1IDE5Ljc1IDE4LjUgMTkuNzVaTTE4LjUgMzQuNzVDMTguODMxNiAzNC43NSAxOS4xNDk1IDM0LjYxODMgMTkuMzgzOSAzNC4zODM5QzE5LjYxODMgMzQuMTQ5NSAxOS43NSAzMy44MzE1IDE5Ljc1IDMzLjVDMTkuNzUgMzMuMTY4NSAxOS42MTgzIDMyLjg1MDUgMTkuMzgzOSAzMi42MTYxQzE5LjE0OTUgMzIuMzgxNyAxOC44MzE2IDMyLjI1IDE4LjUgMzIuMjVDMTguMTY4NSAzMi4yNSAxNy44NTA2IDMyLjM4MTcgMTcuNjE2MiAzMi42MTYxQzE3LjM4MTcgMzIuODUwNSAxNy4yNSAzMy4xNjg1IDE3LjI1IDMzLjVDMTcuMjUgMzMuODMxNSAxNy4zODE3IDM0LjE0OTUgMTcuNjE2MiAzNC4zODM5QzE3Ljg1MDYgMzQuNjE4MyAxOC4xNjg1IDM0Ljc1IDE4LjUgMzQuNzVaTTMzLjUgMzQuNzVDMzMuODMxNiAzNC43NSAzNC4xNDk1IDM0LjYxODMgMzQuMzgzOSAzNC4zODM5QzM0LjYxODMgMzQuMTQ5NSAzNC43NSAzMy44MzE1IDM0Ljc1IDMzLjVDMzQuNzUgMzMuMTY4NSAzNC42MTgzIDMyLjg1MDUgMzQuMzgzOSAzMi42MTYxQzM0LjE0OTUgMzIuMzgxNyAzMy44MzE2IDMyLjI1IDMzLjUgMzIuMjVDMzMuMTY4NSAzMi4yNSAzMi44NTA2IDMyLjM4MTcgMzIuNjE2MiAzMi42MTYxQzMyLjM4MTcgMzIuODUwNSAzMi4yNSAzMy4xNjg1IDMyLjI1IDMzLjVDMzIuMjUgMzMuODMxNSAzMi4zODE3IDM0LjE0OTUgMzIuNjE2MiAzNC4zODM5QzMyLjg1MDYgMzQuNjE4MyAzMy4xNjg1IDM0Ljc1IDMzLjUgMzQuNzVaIiBmaWxsPSIjNDU5RkYyIi8+Cjwvc3ZnPgo=',
        },
        _owner: null,
        _store: {},
      },
    },
    position: { x: 350, y: 450 },
  },
  {
    id: '6',
    data: {
      label: {
        key: null,
        ref: null,
        props: {
          id: '6',
          backgroundColor: 'white',
          title: 'A6',
          tagBackgroundColor: '#FFE7FE',
          tagColor: '#CF6ACB',
          tagName: 'Store',
          image:
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTIiIGhlaWdodD0iNTIiIHZpZXdCb3g9IjAgMCA1MiA1MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjUyIiBoZWlnaHQ9IjUyIiByeD0iNCIgZmlsbD0iI0YwRjdGRSIvPgo8cGF0aCBkPSJNMjkuNzUgMTcuMjVIMzIuMjVDMzIuOTEzMSAxNy4yNSAzMy41NDkgMTcuNTEzNCAzNC4wMTc4IDE3Ljk4MjJDMzQuNDg2NiAxOC40NTExIDM0Ljc1IDE5LjA4NyAzNC43NSAxOS43NVYyOS45NjI1QzM1LjU4NDQgMzAuMjU3NCAzNi4yODc3IDMwLjgzNzcgMzYuNzM1NSAzMS42MDFDMzcuMTgzMyAzMi4zNjQzIDM3LjM0NjkgMzMuMjYxMyAzNy4xOTczIDM0LjEzMzVDMzcuMDQ3NyAzNS4wMDU3IDM2LjU5NDYgMzUuNzk2OSAzNS45MTggMzYuMzY3M0MzNS4yNDE0IDM2LjkzNzggMzQuMzg1IDM3LjI1MDYgMzMuNSAzNy4yNTA2QzMyLjYxNTEgMzcuMjUwNiAzMS43NTg2IDM2LjkzNzggMzEuMDgyMSAzNi4zNjczQzMwLjQwNTUgMzUuNzk2OSAyOS45NTI0IDM1LjAwNTcgMjkuODAyOCAzNC4xMzM1QzI5LjY1MzIgMzMuMjYxMyAyOS44MTY4IDMyLjM2NDMgMzAuMjY0NiAzMS42MDFDMzAuNzEyNCAzMC44Mzc3IDMxLjQxNTcgMzAuMjU3NCAzMi4yNSAyOS45NjI1VjE5Ljc1SDI5Ljc1VjIzLjVMMjQuMTI1IDE4LjVMMjkuNzUgMTMuNVYxNy4yNVpNMTcuMjUgMjIuMDM3NUMxNi40MTU3IDIxLjc0MjYgMTUuNzEyNCAyMS4xNjIzIDE1LjI2NDYgMjAuMzk5QzE0LjgxNjggMTkuNjM1NyAxNC42NTMyIDE4LjczODcgMTQuODAyOCAxNy44NjY1QzE0Ljk1MjQgMTYuOTk0MyAxNS40MDU1IDE2LjIwMzEgMTYuMDgyMSAxNS42MzI3QzE2Ljc1ODYgMTUuMDYyMiAxNy42MTUxIDE0Ljc0OTQgMTguNSAxNC43NDk0QzE5LjM4NSAxNC43NDk0IDIwLjI0MTQgMTUuMDYyMiAyMC45MTggMTUuNjMyN0MyMS41OTQ2IDE2LjIwMzEgMjIuMDQ3NyAxNi45OTQzIDIyLjE5NzMgMTcuODY2NUMyMi4zNDY5IDE4LjczODcgMjIuMTgzMyAxOS42MzU3IDIxLjczNTUgMjAuMzk5QzIxLjI4NzcgMjEuMTYyMyAyMC41ODQ0IDIxLjc0MjYgMTkuNzUgMjIuMDM3NVYyOS45NjI1QzIwLjU4NDQgMzAuMjU3NCAyMS4yODc3IDMwLjgzNzcgMjEuNzM1NSAzMS42MDFDMjIuMTgzMyAzMi4zNjQzIDIyLjM0NjkgMzMuMjYxMyAyMi4xOTczIDM0LjEzMzVDMjIuMDQ3NyAzNS4wMDU3IDIxLjU5NDYgMzUuNzk2OSAyMC45MTggMzYuMzY3M0MyMC4yNDE0IDM2LjkzNzggMTkuMzg1IDM3LjI1MDYgMTguNSAzNy4yNTA2QzE3LjYxNTEgMzcuMjUwNiAxNi43NTg2IDM2LjkzNzggMTYuMDgyMSAzNi4zNjczQzE1LjQwNTUgMzUuNzk2OSAxNC45NTI0IDM1LjAwNTcgMTQuODAyOCAzNC4xMzM1QzE0LjY1MzIgMzMuMjYxMyAxNC44MTY4IDMyLjM2NDMgMTUuMjY0NiAzMS42MDFDMTUuNzEyNCAzMC44Mzc3IDE2LjQxNTcgMzAuMjU3NCAxNy4yNSAyOS45NjI1VjIyLjAzNzVaTTE4LjUgMTkuNzVDMTguODMxNiAxOS43NSAxOS4xNDk1IDE5LjYxODMgMTkuMzgzOSAxOS4zODM5QzE5LjYxODMgMTkuMTQ5NSAxOS43NSAxOC44MzE1IDE5Ljc1IDE4LjVDMTkuNzUgMTguMTY4NSAxOS42MTgzIDE3Ljg1MDUgMTkuMzgzOSAxNy42MTYxQzE5LjE0OTUgMTcuMzgxNyAxOC44MzE2IDE3LjI1IDE4LjUgMTcuMjVDMTguMTY4NSAxNy4yNSAxNy44NTA2IDE3LjM4MTcgMTcuNjE2MiAxNy42MTYxQzE3LjM4MTcgMTcuODUwNSAxNy4yNSAxOC4xNjg1IDE3LjI1IDE4LjVDMTcuMjUgMTguODMxNSAxNy4zODE3IDE5LjE0OTUgMTcuNjE2MiAxOS4zODM5QzE3Ljg1MDYgMTkuNjE4MyAxOC4xNjg1IDE5Ljc1IDE4LjUgMTkuNzVaTTE4LjUgMzQuNzVDMTguODMxNiAzNC43NSAxOS4xNDk1IDM0LjYxODMgMTkuMzgzOSAzNC4zODM5QzE5LjYxODMgMzQuMTQ5NSAxOS43NSAzMy44MzE1IDE5Ljc1IDMzLjVDMTkuNzUgMzMuMTY4NSAxOS42MTgzIDMyLjg1MDUgMTkuMzgzOSAzMi42MTYxQzE5LjE0OTUgMzIuMzgxNyAxOC44MzE2IDMyLjI1IDE4LjUgMzIuMjVDMTguMTY4NSAzMi4yNSAxNy44NTA2IDMyLjM4MTcgMTcuNjE2MiAzMi42MTYxQzE3LjM4MTcgMzIuODUwNSAxNy4yNSAzMy4xNjg1IDE3LjI1IDMzLjVDMTcuMjUgMzMuODMxNSAxNy4zODE3IDM0LjE0OTUgMTcuNjE2MiAzNC4zODM5QzE3Ljg1MDYgMzQuNjE4MyAxOC4xNjg1IDM0Ljc1IDE4LjUgMzQuNzVaTTMzLjUgMzQuNzVDMzMuODMxNiAzNC43NSAzNC4xNDk1IDM0LjYxODMgMzQuMzgzOSAzNC4zODM5QzM0LjYxODMgMzQuMTQ5NSAzNC43NSAzMy44MzE1IDM0Ljc1IDMzLjVDMzQuNzUgMzMuMTY4NSAzNC42MTgzIDMyLjg1MDUgMzQuMzgzOSAzMi42MTYxQzM0LjE0OTUgMzIuMzgxNyAzMy44MzE2IDMyLjI1IDMzLjUgMzIuMjVDMzMuMTY4NSAzMi4yNSAzMi44NTA2IDMyLjM4MTcgMzIuNjE2MiAzMi42MTYxQzMyLjM4MTcgMzIuODUwNSAzMi4yNSAzMy4xNjg1IDMyLjI1IDMzLjVDMzIuMjUgMzMuODMxNSAzMi4zODE3IDM0LjE0OTUgMzIuNjE2MiAzNC4zODM5QzMyLjg1MDYgMzQuNjE4MyAzMy4xNjg1IDM0Ljc1IDMzLjUgMzQuNzVaIiBmaWxsPSIjNDU5RkYyIi8+Cjwvc3ZnPgo=',
        },
        _owner: null,
        _store: {},
      },
    },
    position: { x: 550, y: 325 },
    type: 'output',
    targetPosition: 'left',
  },
  { id: 'e1-6', source: '1', target: '6', type: 'smoothstep' },
  { id: 'e2-3', source: '2', target: '3', type: 'smoothstep' },
  { id: 'e2-6', source: '2', target: '6', type: 'smoothstep' },
  { id: 'e3-6', source: '3', target: '6', type: 'smoothstep' },
];

export default data3;
