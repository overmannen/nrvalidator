import http.server
import socketserver

PORT = 8000

class Myhandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        print(f"Received GET request for: {self.path}")
        super().do_GET()

    def do_POST(self):
        print(f"Received POST request for: {self.path}")
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length).decode('utf-8')
        print(f"POST data: {post_data}")
        self.send_response(200)
        self.send_header('Content-type', 'text/plain')
        self.end_headers()
        self.wfile.write(b"POST request received")

with socketserver.TCPServer(((""), PORT), Myhandler) as httpd:
    print(f"Serving at port {PORT}")
    httpd.serve_forever()
