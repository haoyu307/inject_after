<?php
use PHPUnit\Framework\TestCase;
use Bunny\InjectAfter;

final class InjectAfterTest extends TestCase
{
    public function testInjectAfter(): void
    {
        $stack = array(
            "foo" => 3,
            "bar" => 1
        );        
        $newStack = InjectAfter::injectAfter($stack, "foo", "baz", 42);
        $this->assertSame(42, $newStack["baz"]);
        $this->assertSame(1, array_search("baz", array_keys($newStack)));
        
        $stack1 = array(
            "foo" => 21,
            "bar" => 13,
            "baz" => 31
        );
        $newStack1 = InjectAfter::injectAfter($stack1, "foo", "baz", 42);
        $this->assertSame(42, $newStack1["baz"]);
        $this->assertSame(1, array_search("baz", array_keys($newStack1)));
    }
}