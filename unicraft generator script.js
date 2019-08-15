document.addEventListener("DOMContentLoaded", function(event) {
    var pocpage = "PGh0bWw+PHRpdGxlPlVuaUNyYWZ0PC90aXRsZT48bGluayByZWw9InN0eWxlc2hlZXQiIG1lZGlhPSJzY3JlZW4iIGhyZWY9Imh0dHBzOi8vZm9udGxpYnJhcnkub3JnL2ZhY2UvbWluZWNyYWZ0aWEiIHR5cGU9InRleHQvY3NzIi8+IDxzdHlsZT5ib2R5e2JhY2tncm91bmQtaW1hZ2U6IHVybCgiaHR0cHM6Ly93d3cudGhvbWFzdmRidWxrLm5sL21pbmVjcmFmdC9iYWNrZ3JvdW5kNS5wbmciKTsgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO31zcGFuLnRleHRib3h7YmFja2dyb3VuZC1jb2xvcjogI0ZGRjsgY29sb3I6ICM4ODg7IGxpbmUtaGVpZ2h0OjIwcHg7IGhlaWdodDoyMHB4OyBwYWRkaW5nOjNweDsgYm9yZGVyOjFweCAjODg4IHNvbGlkOyBmb250LXNpemU6OXB0O31zcGFuLnRleHRib3ggaW5wdXR7Ym9yZGVyOiAwcHg7IGJhY2tncm91bmQtY29sb3I6ICNGRkY7fS5nYW1lZnJhbWV7bWFyZ2luOiAxMDBweCBhdXRvOyBwb3NpdGlvbjogYWJzb2x1dGU7IHdpZHRoOiA3NSU7IHRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpOyBtaW4td2lkdGg6MzIwcHg7IG1pbi1oZWlnaHQ6MjQwcHg7IG1heC13aWR0aDo4MDBweDsgbWF4LWhlaWdodDo2MDBweDsgaGVpZ2h0OiA5MCU7IHRvcDowO30uYnV0dG9ue2hlaWdodDogNDBweDsgd2lkdGg6IDQwMHB4OyBvdXRsaW5lOiAycHggc29saWQgYmxhY2s7IHBvc2l0aW9uOiByZWxhdGl2ZTsgbWFyZ2luOiAwOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9pLmltZ3VyLmNvbS9RNjhIY29hLnBuZycpOyBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0OyBwYWRkaW5nOiAwOyBmb250LWZhbWlseTogTWluZWNyYWZ0aWFSZWd1bGFyOyB0ZXh0LWFsaWduOiBjZW50ZXI7IGNvbG9yOiB3aGl0ZTsgdGV4dC1zaGFkb3c6IDNweCAzcHggIzRDNEM0QzsgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICM1NjU2NTY7IGJvcmRlci1yaWdodDogMnB4IHNvbGlkICM1NjU2NTY7IGJvcmRlci1sZWZ0OiAycHggc29saWQgI0FBQTsgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNBQUE7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IGZvbnQtc2l6ZTogMTZweDt9LmJ1dHRvbiBzcGFue3Bvc2l0aW9uOiByZWxhdGl2ZTsgbGluZS1oZWlnaHQ6IDQwcHg7IGJvdHRvbTogM3B4O30uYnV0dG9uOmhvdmVye2JvcmRlci1ib3R0b206IDRweCBzb2xpZCAjNTk2MzlBOyBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjNTk2MzlBOyBib3JkZXItbGVmdDogMnB4IHNvbGlkICNCREM2RkY7IGJvcmRlci10b3A6IDJweCBzb2xpZCAjQkRDNkZGOyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vaS5pbWd1ci5jb20vd1RjQ1FtVC5wbmcnKTsgY29sb3I6ICNGRkZGQTA7fTwvc3R5bGU+IDxib2R5PjwhLS0gYnkgQXJ0aHVyIENhcnJlbmhvIC0tPjxjZW50ZXI+PGZvcm0+IDxzcGFuIGNsYXNzPSJ0ZXh0Ym94Ij4gaHR0cHM6Ly9jbGFzc2ljLm1pbmVjcmFmdC5uZXQvP2pvaW49PGlucHV0IHR5cGU9InRleHQiIGlkPSJ1cmwiLz4gPC9zcGFuPjwvZm9ybT48ZGl2IGNsYXNzPSJidXR0b24iIG9uY2xpY2s9ImxvYWRVcmwoKSI+IDxzcGFuPkVudGVyIE11bHRpcGxheWVyPC9zcGFuPjwvZGl2PjxkaXYgY2xhc3M9ImJ1dHRvbiIgb25jbGljaz0iZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3dVcmwnKS5yZXF1ZXN0RnVsbHNjcmVlbigpOyI+IDxzcGFuPkZ1bGxzY3JlZW48L3NwYW4+PC9kaXY+PGJyPjxpZnJhbWUgc3JjPSJodHRwczovL2NsYXNzaWMubWluZWNyYWZ0Lm5ldCIgaWQ9InNob3dVcmwiIGNsYXNzPSJnYW1lZnJhbWUiIGFsbG93ZnVsbHNjcmVlbj0ndHJ1ZScgZnJhbWVib3JkZXI9IjAiIHdlYmtpdGFsbG93ZnVsbHNjcmVlbj0idHJ1ZSIgbW96YWxsb3dmdWxsc2NyZWVuPSJ0cnVlIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+PC9jZW50ZXI+PHNjcmlwdCB0eXBlPSJ0ZXh0L2phdmFzY3JpcHQiPmZ1bmN0aW9uIGxvYWRVcmwoKXt2YXIgdXJsPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAndXJsJyApLnZhbHVlOyB2YXIgdXJsMT0naHR0cHM6Ly9jbGFzc2ljLm1pbmVjcmFmdC5uZXQvP2pvaW49JyArIHVybCB2YXIgc2hvd1VybD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3Nob3dVcmwnICk7IHNob3dVcmwuc3JjPXVybDE7fTwvc2NyaXB0PjwvYm9keT48L2h0bWw+"
    document.open();
    document.write(atob(pocpage));
    document.close();
  });
