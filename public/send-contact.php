 <?php

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false]);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);

$name = trim($data['name'] ?? '');
$email = filter_var($data['email'] ?? '', FILTER_VALIDATE_EMAIL);
$phone = trim($data['phone'] ?? '');
$service = trim($data['service'] ?? '');
$message = trim($data['message'] ?? '');

if (!$name || !$email || !$service || !$message) {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'Required fields are missing.'
    ]);
    exit;
}

$recipient = 'f.nasraoui@finma.ca';
$subject = 'New FINMA website enquiry - ' . $service;

$emailBody =
    "A new enquiry was submitted through finma.ca.\n\n" .
    "Name: {$name}\n" .
    "Email: {$email}\n" .
    "Telephone: {$phone}\n" .
    "Area of Interest: {$service}\n\n" .
    "Message:\n{$message}\n";

$headers = [
    'From: FINMA Website <no-reply@finma.ca>',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8'
];

$sent = mail(
    $recipient,
    $subject,
    $emailBody,
    implode("\r\n", $headers)
);

if (!$sent) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'The email could not be sent.'
    ]);
    exit;
}

echo json_encode(['success' => true]);